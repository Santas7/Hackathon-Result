export interface IActionButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'orange' | 'secondary'
}

export interface IAreaButtonProps {
    buttonText: string
    onClick: () => void
}

export interface IAreaCardProps {}

export interface IPlayerCardProps {
    playerName: string
    playerPoint: number
}