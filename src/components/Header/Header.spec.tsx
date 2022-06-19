import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Header component', () => {
  it('Should have to render correctly', () => {
    render(
      <Header />
    )

    expect(screen.getAllByText('Home').length).toBe(2)
    expect(screen.getAllByText('Posts').length).toBe(2)
  })
})
