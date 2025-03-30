import styles from './app-input.module.scss'

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
  errorMessage?: string
}

export const AppInput = ({ isError, errorMessage, ...props }: IAppInputProps) => {
  return (
    <div className={styles.appInput}>
      <input {...props} />
      {isError && <p>{errorMessage}</p>}
    </div>
  )
}
