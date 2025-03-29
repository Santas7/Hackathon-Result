import { useState } from "react";

import { useGameTime } from "../../core/hooks/use-game-timer";
import { GameTimer } from "../../components/game-timer";

export const TestTimer = () => {
    const [isGameRunning, setIsGameRunning] = useState(false);
    const { formattedTime, resetTime } = useGameTime(isGameRunning);

    const handleStart = () => {
        console.log("Start clicked");
        resetTime();
        setIsGameRunning(true);
    };

    const handleStop = () => {
        console.log("Stop clicked");
        setIsGameRunning(false);
    };

    return (
        <div>
            {/* <GameTimer time={formattedTime} movesTaken={4} /> */}
            <p>Time: {formattedTime}</p>
            <button onClick={handleStart}>Start Game</button>
            <button onClick={handleStop}>Stop Game</button>
        </div>
    );
};