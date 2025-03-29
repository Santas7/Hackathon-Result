import { useState } from 'react'

import { IGameSettings } from '../../core/types/for-game-setup'
import { SelectOption } from '../../components/select-option'
import {
  extractGridSizeValue,
  formatGridSizeOptions,
  formatSelectedGridSize,
} from '../../core/utils/game-setup.utils'
import { settings as allSettings, defaultSettings } from '../../core/constants/for-game-setup'

import styles from './game-setup.module.scss'

export const GameSetup = () => {
  const [settings, setSettings] = useState<IGameSettings>(defaultSettings)

  const handleSettingChange = (key: keyof IGameSettings, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleGridSizeChange = (value: string) => {
    const gridSizeValue = extractGridSizeValue(value)
    handleSettingChange('gridSize', gridSizeValue)
  }

  const handleStartGame = () => {
    console.log(settings)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>memory</h1>
      <div className={styles.setupCard}>
        <div className={styles.optionGroup}>
          <label className={styles.label}>Select Theme</label>
          <SelectOption
            options={allSettings.themes}
            selectedOption={settings.theme}
            onSelect={(value) => handleSettingChange('theme', value)}
          />
        </div>
        <div className={styles.optionGroup}>
          <label className={styles.label}>Grid Size</label>
          <SelectOption
            options={formatGridSizeOptions(allSettings.gridSizes)}
            selectedOption={formatSelectedGridSize(settings.gridSize)}
            onSelect={handleGridSizeChange}
          />
        </div>
        <button className={styles.button} onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  )
}
