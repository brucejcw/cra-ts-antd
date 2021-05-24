import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import useUser from '@/hooks/useUser'

const { Header } = Layout

export default () => {
  const { data: user, loading } = useUser()
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  )
}
