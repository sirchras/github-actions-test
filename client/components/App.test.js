import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('has the correct structure', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('header has the correct text', () => {
    render(<App />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveTextContent('React Boilerplate')
  })
})
