import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { AppButton } from '../../components/common/AppButton/app-button'
import { AppInput } from '../../components/common/AppInput/AppInput'
import styles from './loginPage.module.scss'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegistrationInfo } from '../../components/registration-info/registration-info'
import { useLoginUserMutation } from '../../store/Api/authApi'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ILoginForm {
  userName: string
  userPassword: string
}

const loginScheme = yup.object({
  userName: yup.string().required('Обязательное поле'),
  userPassword: yup.string().min(4, 'Минимум 4 символа').required('Обязательное поле'),
})

export const LoginPage = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [loginUser] = useLoginUserMutation()
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginScheme),
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      userPassword: '',
    },
  })

  const userName = watch('userName')
  const userPassword = watch('userPassword')

  useEffect(() => {
    setIsDisabled(!(userPassword && userName))
  }, [userName, userPassword])

  const onLoginSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
      const payload = {
        username: data.userName,
        password: data.userPassword,
      }
      const response = await loginUser(payload).unwrap()

      if (response?.token) {
        try {
          localStorage.setItem('userToken', response.token)
          navigate('/dashboard-page')
        } catch (storageError) {
          console.error('Ошибка при сохранении токена:', storageError)
        }
      } else {
        console.warn('Ответ сервера не содержит токен')
      }
    } catch (error) {
      console.error(' Ошибка при авторизации:', error)
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <h1>Авторизация</h1>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.userName}
                errorMessage={errors.userName?.message}
                placeholder="Введите свой логин"
                type="text"
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.userPassword}
                errorMessage={errors.userPassword?.message}
                placeholder="Пароль"
                type="password"
                {...field}
              />
            )}
          />
          <AppButton buttonText="Войти" isDisabled={isDisabled} buttonType="submit" />
        </form>
        <RegistrationInfo
          text="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          to="/registration-page"
        />
      </div>
    </div>
  )
}
