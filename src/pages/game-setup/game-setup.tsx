import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGameSettings } from '../../store/reducers/game-setup'

import { IGameSettings } from '../../core/types/for-game-setup'
import { SelectOption } from '../../components/select-option'
import {
  extractGridSizeValue,
  formatGridSizeOptions,
  formatSelectedGridSize,
} from '../../core/utils/game-setup.utils'
import { settings as allSettings, defaultSettings } from '../../core/constants/for-game-setup'

import styles from './game-setup.module.scss'
import { useNavigate } from 'react-router-dom'

export const GameSetup = () => {
  const [settings, setSettings] = useState<IGameSettings>(defaultSettings)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSettingChange = (key: keyof IGameSettings, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleGridSizeChange = (value: string) => {
    const gridSizeValue = extractGridSizeValue(value)
    handleSettingChange('gridSize', gridSizeValue)
  }

  const handleStartGame = () => {
    dispatch(setGameSettings(settings))
    console.log('Settings saved to Redux:', settings)
    navigate('/game-area-page')
  }

  return (
    <div className={styles.container}>
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
