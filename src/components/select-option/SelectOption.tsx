import { FC } from 'react';
// import styles from './SelectOption.module.scss';
import { ISelectOptionProps } from '../../core/types/for-game-setup';


export const SelectOption: FC<ISelectOptionProps> = ({ 
    options, 
    selectedOption, 
    onSelect 
}) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
