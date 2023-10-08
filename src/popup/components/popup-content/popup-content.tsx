import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import classNames from 'classnames'

import { withProviders } from 'app/hoks'

import { Tabs } from 'common/components'
import { useTheme } from 'common/hooks'

import { PageTerms } from 'features/page-terms'
import { Result } from 'features/result'
import { Settings } from 'features/settings'

import styles from './popup-content.module.scss'

interface Props {
  onClose?: () => void
}

const PopupContent: FC<Props> = ({ onClose }) => {
  const { theme, toggleTheme } = useTheme()
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  return (
    <div className={classNames(styles.parent, [theme])}>
      <Tabs
        items={[
          { title: t('result'), component: <Result /> },
          { title: t('history'), component: <PageTerms /> },
          { title: t('settings'), component: <Settings /> },
        ]}
      />
    </div>
  )
}

export default withProviders(PopupContent)
