import styles from './dashboard.module.scss'
import { AppButton } from '../../components/common/app-button/app-button'
import { useNavigate } from 'react-router-dom'
import { GameSetup } from '../game-setup'
import MemoryLogo from '../../assets/img/svg/memoryLogo.svg'
import { IDashboardPageProps } from '../../core/types/for-dashboard'


export const Dashboard = ({}: IDashboardPageProps) => {
  const navigate = useNavigate()

  return (
    <div>
      <header className={styles.header}>
        <img src={MemoryLogo} alt="" />
        <AppButton
          buttonClick={() => {
            navigate('/')
          }}
          buttonText="Выйти"
          isDisabled={false}
        />
      </header>
      <GameSetup />
    </div>
  )
}
