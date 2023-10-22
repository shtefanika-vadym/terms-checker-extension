import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Checks } from 'tabler-icons-react'

import { Row, Show } from 'common/components'
import { RowJustify } from 'common/const'

import { SettingsLang } from 'features/settings/const/settings'

import styles from './settings-language.module.scss'

export const SettingsLanguage: FC = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation()

  const handleChangeLanguage = (lang: SettingsLang): void => {
    changeLanguage(lang)
  }

  return (
    <div className={styles.parent}>
      <Row
        uppercase
        justify={RowJustify.CENTER}
        onClick={() => handleChangeLanguage(SettingsLang.RO)}>
        <Show when={language === SettingsLang.RO}>
          <Checks strokeWidth={1} />
        </Show>
        {SettingsLang.RO}
      </Row>
      <Row
        uppercase
        justify={RowJustify.CENTER}
        onClick={() => handleChangeLanguage(SettingsLang.EN)}>
        <Show when={language === SettingsLang.EN}>
          <Checks strokeWidth={1} />
        </Show>
        {SettingsLang.EN}
      </Row>
      <Row
        uppercase
        justify={RowJustify.CENTER}
        onClick={() => handleChangeLanguage(SettingsLang.RU)}>
        <Show when={language === SettingsLang.RU}>
          <Checks strokeWidth={1} />
        </Show>
        {SettingsLang.RU}
      </Row>
    </div>
  )
}
