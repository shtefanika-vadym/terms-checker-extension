import type { FC } from 'react'
import { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

import { Button } from 'common/components'
import { ButtonSize } from 'common/const'

import { AnalysisActivity } from 'features/analysis/components/analysis-activity/analysis-activity'
import { AnalysisSteps } from 'features/analysis/components/analysis-steps/analysis-steps'
import { AnalysisConst } from 'features/analysis/const/analysis'

import styles from './analysis.module.scss'

import 'react-circular-progressbar/dist/styles.css'

export const Analysis: FC = () => {
  const [percentage, setPercentage] = useState(0)

  setTimeout(() => {
    setPercentage((ct) => ct + 20)
  }, 2000)

  return (
    <div className={styles.parent}>
      <div className={styles.parentLoading}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          className={styles.parentProgress}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '22px',
            pathTransitionDuration: 0.5,
            pathColor: '#47d6ab',
            textColor: '#ffffff',
            backgroundColor: '#3e98c7',
            trailColor: 'hsla(210,7%,56%,.15)',
          })}
        />

        <AnalysisSteps activeIndex={percentage / 30} />
      </div>

      <Button size={ButtonSize.LARGE}>{AnalysisConst.CHECK}</Button>

      <AnalysisActivity />
    </div>
  )
}
