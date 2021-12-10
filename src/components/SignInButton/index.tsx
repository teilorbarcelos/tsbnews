import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

export default function SignInButton({
  title = "Sign in with Github",
  ...rest
}: Props) {
  const { data: session } = useSession()

  return session ? (
    <button
      {...rest}
      type='button'
      className={styles.signinButton}
      onClick={() => signOut()}
    >
      <FaGithub
        color='#04d361'
      />
      {session.user.name}
      <FiX
        color='#737380'
        className={styles.closeIcon}
      />
    </button>
  ) : (
    <button
      {...rest}
      type='button'
      className={styles.signinButton}
      onClick={() => signIn('github')}
    >
      <FaGithub
        color='#eba417'
      />
      {title}
    </button>
  )
}