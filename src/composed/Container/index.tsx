import React from 'react'
import { Card } from 'antd'

export default ({ children, ...props }: any) => {
  return <Card {...props}>{children}</Card>
}
