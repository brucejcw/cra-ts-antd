import styled from 'styled-components'
import { Spin } from 'antd'

export const StyledLayout = styled.div`
  text-align: center;

  .app-header {
    background-color: #fff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
`

export const StyledGlobalSpin = styled(Spin)`
  height: 100%;
`
