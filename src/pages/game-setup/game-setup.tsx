import { useState } from "react";
import { IGameSettings } from "../../core/types/for-game-setup";
import { SelectOption } from "../../components/select-option/SelectOption";
import { defaultSettings } from "../../core/constants/for-game-setup";

export const GameSetup = () => {
    const [settings, setSettings] = useState<IGameSettings>({
        theme: 'Numbers',
        players: '1',
        gridSize: '4x4',
    });
    
    const handleSettingChange = (key: keyof IGameSettings, value: string) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
    };

    function handleStartGame() {
        console.log(settings);
    }

    return (
        <div>
            <h1>memory</h1>
            <div>
                <div>
                    <label>
                        Select Theme
                    </label>
                    <SelectOption
                        options={defaultSettings.themes}
                        selectedOption={settings.theme}
                        onSelect={(value) => handleSettingChange('theme', value)}
                    />
                </div>
                <div>
                    <label>
                        Number of Players
                    </label>
                    <SelectOption
                        options={defaultSettings.playerCount}
                        selectedOption={settings.players}
                        onSelect={(value) => handleSettingChange('players', value)}
                    />
                </div>
                <div>
                    <label>
                        Grid Size
                    </label>
                    <SelectOption
                        options={defaultSettings.gridSizes}
                        selectedOption={settings.gridSize}
                        onSelect={(value) => handleSettingChange('gridSize', value)}
                    />
                </div>
                <button onClick={handleStartGame} >
                    Start Game
                </button>
            </div>
        </div>
    )
}