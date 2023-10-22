import { useTranslation } from 'react-i18next'

import { Row } from 'common/components'

import styles from './analysis-activity.module.scss'

export const AnalysisActivity = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.parent}>
      <h2 className={styles.parentTitle}>{t('recentActivity')}</h2>

      <div className={styles.parentList}>
        {['https://ui.mantine.dev/', 'https://ui.mantine.dev/', 'https://ui.mantine.dev/'].map(
          (activity) => (
            <Row key={activity}>{activity}</Row>
          ),
        )}
      </div>
    </div>
  )
}
