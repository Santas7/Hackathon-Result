import { IAreaCardProps } from '../../../core/types/for-common';
import { IconType } from 'react-icons';

import styles from './area-card.module.scss';

export const AreaCard = ({ n, onClick, isIcon = false }: IAreaCardProps & { isIcon?: boolean }) => {
  const isFlipped = n === null;

  return (
    <div className={`${styles.areaCard} ${isFlipped ? styles.flipped : ''}`} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.front}>
          {isIcon && n 
            ? (n as IconType)({ size: '1em', color: '#fcfcfc' }) 
            : (n ?? '')
          } 
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
};