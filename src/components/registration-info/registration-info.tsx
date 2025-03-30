// import { StyledLink } from '../Typography/StyledLink'
import { StyledLink } from '../common/app-link/app-link'
import styles from './registration-info.module.scss'

import GoogleIcon from '../../assets/img/svg/google.svg'
import GooglePlusIcon from '../../assets/img/svg/google-plus.svg'
import YandexIcon from '../../assets/img/svg/yandex.svg'
import MailRuIcon from '../../assets/img/svg/mail-ru.svg'

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
          <img src={GoogleIcon} alt="Google" />
        </a>
        <a className={styles.regLink} href="#">
          <img src={GooglePlusIcon} alt="Google Plus" />
        </a>
        <a className={styles.regLink} href="#">
          <img src={YandexIcon} alt="Yandex" />
        </a>
        <a className={styles.regLink} href="#">
          <img src={MailRuIcon} alt="Mail.ru" />
        </a>
      </div>
    </div>
  )
}
