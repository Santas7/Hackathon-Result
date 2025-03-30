import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { AreaCard } from '../../common/area-card/index';
import { useGameTime } from '../../../core/hooks/use-game-timer';
import { useGameMove } from '../../../core/hooks/use-game-move';
import { useLogicMemoryGame } from '../../../core/hooks/use-logic-memory-game';
import { GameTimer } from '../../game-timer';
import { GameOverModal } from '../../game-over-modal'; 
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './game-area-main.module.scss';

export const GameAreaMain = () => {
  const { gridSize, players, theme } = useSelector((state: RootState) => ({
    gridSize: state.gameSetup.settings.gridSize,
    players: state.gameSetup.settings.players,
    theme: state.gameSetup.settings.theme,
  }));
  const { formattedTime, resetTime, isTimeUp, stopTimer } = useGameTime(true);
  const { movesTaken, incrementMoves, resetMoves } = useGameMove();
  const { cardValues, flippedCards, matchedCards, handleCardClick, resetGame, isGameWon } = useLogicMemoryGame(
    gridSize || "6",
    theme || "Numbers"
  );
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();

  const onCardClick = (index: number) => {
    if (isTimeUp() || isGameWon) return;
    if (handleCardClick(index)) incrementMoves();
  };

  const handleReset = () => {
    resetTime();
    resetMoves();
    resetGame();
    setIsModalOpen(false); 
  };

  const handleNewGame = () => {
    navigate('/dashboard-page')
  }
  const handleRestart = () => {
    navigate('/game-area-page')
    window.location.reload()
  }

  useEffect(() => {
    if (isGameWon) {
      stopTimer();
      setIsModalOpen(true); 
    }
  }, [isGameWon, stopTimer]);

  return (
    <div className={styles.gameAreaMainWrapper}>
      <div className={`${styles.gameAreaMain} ${styles[`grid${gridSize}`]}`}>
        {cardValues.map((value, index) => (
          <AreaCard
            key={index}
            n={flippedCards.includes(index) || matchedCards.has(value) ? value : null}
            onClick={() => onCardClick(index)}
            isIcon={theme === "Icons"}
          />
        ))}
      </div>
      <GameTimer
        time={formattedTime}
        movesTaken={movesTaken}
        isTimeUp={isTimeUp()}
        onReset={handleReset}
      />
      {isModalOpen && (
        <GameOverModal
          timeElapsed={formattedTime}
          movesTaken={movesTaken}
          onRestart={handleRestart}
          onNewGame={handleNewGame}
        />
      )}
    </div>
  );
};