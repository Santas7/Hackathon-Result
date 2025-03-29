import { FC } from 'react'
import styles from './select-option.module.scss'
import { ISelectOptionProps } from '../../core/types/for-game-setup'

export const SelectOption: FC<ISelectOptionProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
