import { render, screen } from '@testing-library/react'
import SignInButton from '.'
import { SessionMock } from '../../__mock__/SessionMock'



describe('Header component', () => {
  it('Should have to render correctly when not logged', () => {
    render(
      <SessionMock sessionInfo={null}>
        <SignInButton />
      </SessionMock>
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('Should have to render correctly when user logged', () => {
    render(
      <SessionMock sessionInfo={{ user: { name: 'John Doe' }, expires: 'any thing' }}>
        <SignInButton />
      </SessionMock>
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
