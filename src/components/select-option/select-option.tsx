import { FC } from 'react'
import classNames from 'classnames'

import { ISelectOptionProps } from '../../core/types/for-game-setup'

import styles from './select-option.module.scss'


export const SelectOption: FC<ISelectOptionProps> = ({ 
  options, 
  selectedOption, 
  onSelect 
}) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option}
          className={classNames(styles.option, { [styles.selected]: selectedOption === option })}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
