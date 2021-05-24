import React from 'react'
import { render } from '@testing-library/react'
import Index from '../index'

test('renders learn react link', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText(/Welcome to React!!/i)
  expect(linkElement).toBeInTheDocument()
})
