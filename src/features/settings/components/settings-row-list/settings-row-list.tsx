import type { FC } from 'react'

import { SettingsRow } from 'features/settings/components/settings-row/settings-row'
import { SettingsRow as SettingsRowType } from 'features/settings/interfaces/settings-row'

interface Props {
  items: SettingsRowType[]
}

export const SettingsRowList: FC<Props> = ({ items }) => {
  return (
    <>
      {items.map(
        (item: SettingsRowType): JSX.Element => (
          <SettingsRow {...item} key={item.title} />
        ),
      )}
    </>
  )
}
