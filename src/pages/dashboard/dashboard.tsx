import styles from './dashboard.module.scss'
import { AppButton } from '../../components/common/app-button/app-button'
import { useNavigate } from 'react-router-dom'
import { GameSetup } from '../game-setup';

interface IDashboardPageProps {}

export const Dashboard = ({}: IDashboardPageProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <header className={styles.header}>
        <img src="/public/img/svg/memoryLogo.svg" alt="" />
        <AppButton buttonClick={() => {}} buttonText="Выйти" isDisabled={false} />
      </header>
      <GameSetup/>
    </div>
  )
}
