import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppButton } from '../../components/common/app-button/app-button'
import { AppInput } from '../../components/common/app-input/app-input'
import { RegistrationInfo } from '../../components/registration-info/registration-info'
import { useRegisterUserMutation } from '../../store/api/auth-api'

import styles from './registration.module.scss'

interface ILoginForm {
  userName: string
  newPassword: string
  repeatPassword: string
}

const loginScheme = yup.object({
  userName: yup.string().required('обязательное поле'),
  newPassword: yup.string().required('обязательное поле').min(4, 'Минимум 4 символа'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Пароли должны совпадать')
    .required('обязательное поле'),
})

export const Registration = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [serverError, setServerError] = useState<string | null>(null) 
  const [registrationUser, { data: userData }] = useRegisterUserMutation()

  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    resolver: yupResolver(loginScheme),
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      newPassword: '',
      repeatPassword: '',
    },
  })

  const userName = watch('userName')
  const newPassword = watch('newPassword')
  const repeatPassword = watch('repeatPassword')

  useEffect(() => {
    setIsDisabled(!(newPassword && repeatPassword && userName))
  }, [userName, newPassword, repeatPassword])

  const onRegistrationSubmit: SubmitHandler<ILoginForm> = async (data) => {
    setServerError(null)
    if (data.newPassword !== data.repeatPassword) {
      setError('repeatPassword', { type: 'manual', message: 'Пароли должны совпадать' })
      return
    }

    try {
      const payload = {
        username: data.userName,
        password: data.newPassword,
      }
      const response = await registrationUser(payload).unwrap()
      console.log('Успешная регистрация:', response)
      if (response) {
        alert('Вы успешно прошли регистрацию')
        navigate('/')
      }
    } catch (error: any) {
      console.error('Ошибка при регистрации:', error)
      setServerError(error?.data?.message || 'Ошибка при регистрации. Попробуйте снова.')
    }
  }

  return (
    <div className={styles.registrationWrapper}>
      <div className={styles.container}>
        <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>
          <h1>Регистрация</h1>

          {serverError && (
            <div className={styles.errorMessage}>{serverError}</div>
          )}

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
            name="newPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.newPassword}
                errorMessage={errors.newPassword?.message}
                placeholder="Пароль"
                type="password"
                {...field}
              />
            )}
          />

          <Controller
            name="repeatPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.repeatPassword}
                errorMessage={errors.repeatPassword?.message}
                placeholder="Повторите пароль"
                type="password"
                {...field}
              />
            )}
          />

          <AppButton buttonText="Войти" isDisabled={isDisabled} buttonType="submit" />
        </form>

        <RegistrationInfo text="Уже есть аккаунт?" to="/" linkLabel="Войти" />
      </div>
    </div>
  )
}