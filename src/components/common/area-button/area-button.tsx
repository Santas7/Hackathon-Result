interface IButtonProps {
  buttonText: string
  onClick: () => void
}

export const AreaButton = ({ buttonText, onClick }: IButtonProps) => {
  return <button onClick={() => onClick}>{buttonText}</button>
}
