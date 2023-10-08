import type { ReactNode } from 'react'

interface Props {
  when: any
  children: ReactNode
  fallback?: ReactNode
}

export const Show = ({ when, children, fallback = null }: Props) => {
  if (Boolean(when)) return <>{children}</>
  return <>{fallback}</>
}
