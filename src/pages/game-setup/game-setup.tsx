import { useState } from 'react'
import { IGameSettings } from '../../core/types/for-game-setup'
import { SelectOption } from '../../components/select-option'
import { defaultSettings } from '../../core/constants/for-game-setup'
import styles from './game-setup.module.scss'

export const GameSetup = () => {
  const [settings, setSettings] = useState<IGameSettings>({
    theme: 'Numbers',
    players: '1',
    gridSize: '4',
  })

  const handleSettingChange = (key: keyof IGameSettings, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  function handleStartGame() {
    console.log(settings)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>memory</h1>
      <div className={styles.setupCard}>
        <div className={styles.optionGroup}>
          <label className={styles.label}>Select Theme</label>
          <SelectOption
            options={defaultSettings.themes}
            selectedOption={settings.theme}
            onSelect={(value) => handleSettingChange('theme', value)}
          />
        </div>
        {/* <div className={styles.optionGroup}>
                    <label className={styles.label}>
                        Number of Players
                    </label>
                    <SelectOption
                        options={defaultSettings.playerCount}
                        selectedOption={settings.players}
                        onSelect={(value) => handleSettingChange('players', value)}
                    />
                </div> */}
        <div className={styles.optionGroup}>
          <label className={styles.label}>Grid Size</label>
          <SelectOption
            options={defaultSettings.gridSizes.map((size) => `${size}x${size}`)}
            selectedOption={`${settings.gridSize}x${settings.gridSize}`}
            onSelect={(value) => handleSettingChange('gridSize', value.split('x')[0])}
          />
        </div>
        <button className={styles.button} onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  )
}
