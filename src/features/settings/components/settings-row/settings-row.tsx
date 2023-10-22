import type { FC } from 'react'

import { Row } from 'common/components'

import { SettingsRow as Props } from 'features/settings/interfaces/settings-row'

export const SettingsRow: FC<Props> = ({ handleChange, title, icon }) => {
  return (
    <Row onClick={() => handleChange(title)}>
      {icon} {title}
    </Row>
  )
}
