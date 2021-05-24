import React from 'react'
import { Alert } from 'antd'
import { AlertProps as _AlertProps } from 'antd/lib/alert'
import styled from 'styled-components'

const sizeMap = {
  sm: '20px',
  md: '30px',
  lg: '40px',
}

const StyledAlert = styled(Alert)<{
  size?: 'sm' | 'md' | 'lg'
}>`
  font-size: ${({ size }) => (size ? sizeMap[size] || size : sizeMap['md'])};
`

export type AlertProps = {
  size?: 'sm' | 'md' | 'lg'
} & _AlertProps

export default ({ size, ...rest }: AlertProps) => {
  return <StyledAlert size={size} {...rest} />
}
