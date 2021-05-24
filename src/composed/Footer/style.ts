import styled from 'styled-components'

import { Layout } from 'antd'

const { Footer } = Layout

export const StyledFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
`
