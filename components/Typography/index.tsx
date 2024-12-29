import React from 'react'
import styles from './typography.module.scss'

type TextType = 'p' | 'span' | 'h1' | 'h5'

type Props = {
  children: React.ReactNode
  type?: TextType
  variant?:
    | 'heading'
    | 'subtitle'
    | 'title'
    | 'nameProfile'
    | 'titleProfile'
    | 'sidebarLinks'
    | 'sidebarLinksActive'
    | 'primary'
    | 'lableTabs'
    | 'lableActiveTabs'
    | 'tableCol'
    |  'tableButton'
    |  'tableButton'
    |  'titleModal'
    | 'lableDetail'
    | 'contentDetail'
    | 'checkbox'
    | 'noData'
    | string
  className?: string
}

export const Typography = ({
  children,
  type = 'p',
  variant = 'title',
  className,
}: Props) => {
  return React.createElement(
    type,
    {
      className: [styles[variant], className].join(' '),
    },
    children,
  )
}
