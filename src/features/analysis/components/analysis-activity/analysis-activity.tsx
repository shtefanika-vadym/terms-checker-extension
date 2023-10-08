import { Row } from 'common/components'

import { AnalysisConst } from 'features/analysis/const/analysis'

import styles from './analysis-activity.module.scss'

export const AnalysisActivity = () => {
  return (
    <div className={styles.parent}>
      {AnalysisConst.RECENT_ACTIVITY}
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
