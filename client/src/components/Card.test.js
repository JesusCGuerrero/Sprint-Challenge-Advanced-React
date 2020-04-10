import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

test('Does the Card component render to the page', () => {
    render(<Card />)
})

test("Check if the Card can render data onto the page", async () => {

    const props = {
        name: 'John',
        country: 'Wick',
        searches: '9000'
    }

    const container = render(<Card {...props}/>)
    const name = container.getByTestId(/name/i)
    const country = container.getByTestId(/Country/i)
    const searches = container.getByTestId(/Searches/i)

    expect(name.innerHTML).toBe('John' )
    expect(country.innerHTML).toBe('Wick')
    expect(searches.innerHTML).toBe('Searches: 9000')
})