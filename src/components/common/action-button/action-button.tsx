import { FC } from 'react'

import { IActionButtonProps } from '../../../core/types/for-common'

import styles from './action-button.module.scss'

export const ActionButton: FC<IActionButtonProps> = ({ onClick, children, variant = 'orange' }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  )
}
