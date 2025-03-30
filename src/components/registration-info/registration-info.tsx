// import { StyledLink } from '../Typography/StyledLink'
import { StyledLink } from '../common/app-link/app-link'
import styles from './registration-info.module.scss'

interface IRegistrationInfoProps {
  linkLabel: string
  to: string
  text:string
}

export const RegistrationInfo = ({ linkLabel, to,text }: IRegistrationInfoProps) => {
  return (
    <div className={styles.registrationInfo}>
      <div>
        <span>{text}</span>
        <StyledLink to={to} linkText={linkLabel} />
      </div>

      <p>Войти с помощью</p>
      <div className={styles.iconsWrapper}>
        <a className={styles.regLink} href="#">
          <img src="../../../public/img/svg/google.svg" alt="Google" />
        </a>
        <a className={styles.regLink} href="#">
          <img src="../../../public/img/svg/google-plus.svg" alt="Google Plus" />
        </a>
        <a className={styles.regLink} href="#">
          <img src="../../../public/img/svg/yandex.svg" alt="Yandex" />
        </a>
        <a className={styles.regLink} href="#">
          <img src="../../../public/img/svg/mail-ru.svg" alt="Mail.ru" />
        </a>
      </div>
    </div>
  )
}
