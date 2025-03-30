import { useState, useEffect } from 'react';

import { AreaCard } from '../../common/area-card/index';
import { generateCardNumbers } from '../../../core/utils/game-area.utils';
import { IGameAreaMainProps } from '../../../core/types/for-game-area';

import styles from './game-area-main.module.scss';

export const GameAreaMain = ({}: IGameAreaMainProps) => {
  const [cardNumbers, setCardNumbers] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<Set<number>>(new Set()); 
  const [isProcessing, setIsProcessing] = useState<boolean>(false); 

  useEffect(() => {
    setCardNumbers(generateCardNumbers()); 
  }, []);

  const handleCardClick = (index: number) => {
    if (isProcessing || flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.has(cardNumbers[index])) {
      return; 
    }

    setFlippedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsProcessing(true); 

      const [firstIndex, secondIndex] = flippedCards;
      if (cardNumbers[firstIndex] === cardNumbers[secondIndex]) {
        setMatchedCards((prev) => new Set(prev).add(cardNumbers[firstIndex]));
      }

      setTimeout(() => {
        setFlippedCards([]);
        setIsProcessing(false); 
      }, 1000);
    }
  }, [flippedCards, cardNumbers]);

  return (
    <div className={styles.gameAreaMain}>
      {cardNumbers.map((number, index) => (
        <AreaCard
          key={index}
          n={flippedCards.includes(index) || matchedCards.has(number) ? number : null} 
          onClick={() => handleCardClick(index)} 
        />
      ))}
    </div>
  );
};
