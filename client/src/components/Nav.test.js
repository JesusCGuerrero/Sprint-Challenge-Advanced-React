import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Nav from './Nav'

test('Does the Nav component render to the page', () => {
    render(<Nav />)
})

test("Check if toggling darkmode adds the dark-mode class to body", async () => {
    const container = render(<Nav />)
    const button = container.getByText(/darkmode/i)
    fireEvent.click(button)
    expect(document.body.className).toBe("dark-mode")
})