import { FC } from "react";

import { IGameTimerProps } from "../../core/types/for-game-timer";

import styles from "./game-timer.module.scss";


export const GameTimer: FC<IGameTimerProps> = ({ 
    time, 
    movesTaken,
    handleStart,
    handleStop
}) => {
  return (
    <div className={styles.overlay}>
        <button onClick={handleStart}>Start Game</button>
        <button onClick={handleStop}>Stop Game</button>
      <div className={styles.panelsContainer}>
        <div className={styles.panel}>
          <div className={styles.stat}>
            <span>Time</span>
            <strong className={styles.statValue}>{time}</strong>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.stat}>
            <span>Moves</span>
            <strong className={styles.statValue}>{movesTaken}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};