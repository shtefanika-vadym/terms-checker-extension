import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

import { Button } from 'common/components'

import styles from './result.module.scss'

import 'react-circular-progressbar/dist/styles.css'

export const Result: FC = () => {
  const [percentage, setPercentage] = useState(40)

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

        <div className={styles.parentSteps}>
          <div>Analysis started</div>
          <div>Terms reading</div>
          <div>AI analysis</div>
          <div>Results</div>
        </div>
      </div>

      <Button style={{ width: '100%' }}>Check</Button>

      <div>
        Recent activity
        <div className={styles.parentRow}>https://ui.mantine.dev/</div>
      </div>
    </div>
  )
}
