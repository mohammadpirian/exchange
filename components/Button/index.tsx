'use client'
import React from 'react'
import styles from './button.module.scss'

interface ButtonProps {
  variant?:
    | 'login'
    | 'signout'
    | 'inventoryCard'
    | 'DisabledLogin'
    | 'HamburgerMenu'
    | 'modal'
    | 'expire'
    | string
  rounded?: boolean
  prefix?: React.ReactNode
  postfix?: React.ReactNode
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
  className?: string
  type?: any
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'login',
  onClick,
  prefix,
  postfix,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? styles.disable : styles[variant]}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="icon-Ellipse mdi-spin animate-spin"></span>
      ) : (
        <>
          {prefix && prefix}
          {children}
          {postfix && postfix}
        </>
      )}
    </button>
  )
}
