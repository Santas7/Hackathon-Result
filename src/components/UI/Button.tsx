interface IButtonProps {
  buttonText: string
  onClick: () => void
}

export const Button = ({ buttonText, onClick }: IButtonProps) => {
  return <button onClick={() => onClick}>{buttonText}</button>
}
