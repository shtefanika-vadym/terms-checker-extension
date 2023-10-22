import { ReactNode } from 'react'

import { SettingsTab } from 'features/settings/const/settings'

export interface SettingsRow {
  icon: ReactNode
  title: SettingsTab
  handleChange: (value: SettingsTab) => void
}
