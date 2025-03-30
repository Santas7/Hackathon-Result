import { IconType } from 'react-icons';

export interface IActionButtonProps {
  onClick: () => void
  children: React.ReactNode
  variant?: 'orange' | 'secondary'
}

export interface IAreaButtonProps {
  buttonText: string
  onClick: () => void
}

export interface IAreaCardProps {
  n: number | IconType | null;
  onClick: () => void;
  isIcon?: boolean;
}

export interface IPlayerCardProps {
  playerName: string
  playerPoint: number
}
