import styles from './dashboard-page.module.scss'
import { AppButton } from '../../components/common/AppButton/app-button'

interface IDashboardPageProps {}

export const DashboardPage = ({}: IDashboardPageProps) => {
  return (
    <div>
      <header className={styles.header}>
        <img src="/public/img/svg/memoryLogo.svg" alt="" />
        <AppButton buttonClick={() => {}} buttonText="Выйти" isDisabled={false} />
      </header>
    </div>
  )
}
