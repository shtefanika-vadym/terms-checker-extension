import type { FC } from 'react'

import { SettingsTerm } from 'features/settings/components/settings-term/settings-term'
import { SettingsTerm as SettingsTermType } from 'features/settings/interfaces/settings-term'

import styles from './settings-term-list.module.scss'

interface Props {
  terms: SettingsTermType[]
  handleRemove: (id: number) => Promise<void>
}

export const SettingsTermList: FC<Props> = ({ terms, handleRemove }) => {
  return (
    <div className={styles.parent}>
      {terms.map(
        (term: SettingsTermType): JSX.Element => (
          <SettingsTerm {...term} key={term.id} handleRemove={handleRemove} />
        ),
      )}
    </div>
  )
}
