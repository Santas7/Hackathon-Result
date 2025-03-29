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
                <div>
                    <label>
                        Select Theme
                    </label>
                    <div>тут options кнопки</div>
                </div>
                <div>
                    <label>
                        Number of Players
                    </label>
                    <div>тут options кнопки</div>
                </div>
                <div>
                    <label>
                        Grid Size
                    </label>
                    <div>тут options кнопки</div>
                </div>
            </div>
        </div>
    )
}