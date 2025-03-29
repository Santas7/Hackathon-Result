import { useState } from "react";
import { IGameSettings } from "../../core/types/for-game-setup";

export const GameSetup = () => {
    const [settings, setSettings] = useState<IGameSettings>({
        theme: 'Numbers',
        players: '1',
        gridSize: '4x4',
    });
    console.log(settings);
    return (
        <div>
            <h1>memory</h1>
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}