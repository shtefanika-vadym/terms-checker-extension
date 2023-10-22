import type { FC } from 'react'

import { Trash } from 'tabler-icons-react'

import { Row } from 'common/components'
import { RowJustify } from 'common/const'

import { SettingsTerm as SettingsTermType } from 'features/settings/interfaces/settings-term'

interface Props extends SettingsTermType {
  handleRemove: (id: number) => Promise<void>
}

export const SettingsTerm: FC<Props> = ({ id, title, handleRemove }) => {
  return (
    <Row justify={RowJustify.SPACE_BETWEEN}>
      {id + '. ' + title}
      <button className='reset-button' onClick={() => handleRemove(id)}>
        <Trash strokeWidth={1} />
      </button>
    </Row>
  )
}
