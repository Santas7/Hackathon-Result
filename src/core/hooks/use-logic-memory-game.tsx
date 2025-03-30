import { useState, useEffect } from 'react';
import { IconType } from 'react-icons';

import { generateCardValues } from '../utils/game-area.utils';


export const useLogicMemoryGame = (
    gridSize: "4" | "6" | "8", 
    theme: "Numbers" | "Icons"
) => {
  const [cardValues, setCardValues] = useState<(number | IconType)[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<Set<number | IconType>>(new Set());
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    setCardValues(generateCardValues(gridSize, theme));
  }, [gridSize, theme]);

  const handleCardClick = (index: number) => {
    if (
      isProcessing ||
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.has(cardValues[index])
    ) {
      return;
    }
    setFlippedCards((prev) => [...prev, index]);
    return flippedCards.length === 0;
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsProcessing(true);
      const [firstIndex, secondIndex] = flippedCards;
      if (cardValues[firstIndex] === cardValues[secondIndex]) {
        setMatchedCards((prev) => new Set(prev).add(cardValues[firstIndex]));
      }
      setTimeout(() => {
        setFlippedCards([]);
        setIsProcessing(false);
      }, 1000);
    }
  }, [flippedCards, cardValues]);

  const resetGame = () => {
    setCardValues(generateCardValues(gridSize, theme));
    setFlippedCards([]);
    setMatchedCards(new Set());
    setIsProcessing(false);
  };

  return {
    cardValues,
    flippedCards,
    matchedCards,
    handleCardClick,
    resetGame,
    isProcessing
  };
};