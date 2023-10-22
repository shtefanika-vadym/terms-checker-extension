import type { FC } from 'react'
import { useCallback } from 'react'

import { AdjustmentsAlt, Send } from 'tabler-icons-react'

import { Textarea } from 'common/components'
import { Label, Placeholder } from 'common/const'

import { SettingsTermList } from 'features/settings/components/settings-term-list/settings-term-list'

import styles from './settings-terms.module.scss'

export const SettingsTerms: FC = () => {
  const handleRemoveTerm = useCallback(async (): Promise<void> => {}, [])

  return (
    <div className={styles.parent}>
      <div className={styles.parentAdd}>
        <Textarea placeholder={Placeholder.TERM_DESCRIPTION} />
        <div className={styles.parentManage}>
          <button title={Label.REPHRASE} className='reset-button'>
            <AdjustmentsAlt strokeWidth={1} />
          </button>
          <button title={Label.SAVE} className='reset-button'>
            <Send strokeWidth={1} />
          </button>
        </div>
      </div>
      <SettingsTermList
        terms={[
          { id: 1, title: 'test' },
          { id: 2, title: 'tes gfd gfdt' },
          { id: 3, title: 'test gfd df gfd dgdf' },
        ]}
        handleRemove={handleRemoveTerm}
      />
    </div>
  )
}
