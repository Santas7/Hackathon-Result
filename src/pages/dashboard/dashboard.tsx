import styles from './dashboard.module.scss'
import { AppButton } from '../../components/common/app-button/app-button'
import { useNavigate } from 'react-router-dom'

interface IDashboardPageProps {}

export const Dashboard = ({}: IDashboardPageProps) => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate('/game-setup-page')
  }

  return (
    <div>
      <header className={styles.header}>
        <img src="/public/img/svg/memoryLogo.svg" alt="" />
        <AppButton buttonClick={() => {}} buttonText="Выйти" isDisabled={false} />
      </header>
      <div>
        <button onClick={handleCreateRoom}>
          Создать комнату
        </button>
      </div>
      <div>
        Блок отзывов
      </div>
    </div>
  )
}
