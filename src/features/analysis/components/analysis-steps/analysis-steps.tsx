import type { FC } from 'react'

import classNames from 'classnames'
import { Check, Checks } from 'tabler-icons-react'

import { Show } from 'common/components'

import { ANALYSIS_STEPS } from 'features/analysis/const/analysis-steps'

import styles from './analysis-steps.module.scss'

interface Props {
  activeIndex: number
}

export const AnalysisSteps: FC<Props> = ({ activeIndex }) => {
  return (
    <div className={styles.parent}>
      {ANALYSIS_STEPS.map((step: string, index: number) => (
        <div
          key={index}
          className={classNames(styles.parentStep, {
            [styles.parentActiveStep]: activeIndex >= index,
          })}>
          <Show when={activeIndex >= index} fallback={<Check strokeWidth={1} />}>
            <Checks strokeWidth={1} />
          </Show>
          {step}
        </div>
      ))}
    </div>
  )
}
