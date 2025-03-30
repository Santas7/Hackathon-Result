import style from './app-button.module.scss'

interface IAppButtonProps {
  buttonText: string
  isDisabled: boolean
  buttonClick?: () => void
  buttonType?: 'submit' | 'button'
}

export const AppButton = ({
  buttonText,
  isDisabled,
  buttonClick,
  buttonType = 'button',
}: IAppButtonProps) => {
  return (
    <button
      className={style.appButton}
      disabled={isDisabled}
      onClick={buttonClick}
      type={buttonType}
    >
      {buttonText}
    </button>
  )
}
