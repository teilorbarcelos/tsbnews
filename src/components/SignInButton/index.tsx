import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

export default function SignInButton({
  title = "Sign in with Github",
  ...rest
}: Props) {
  const isUserLogguedIn = false

  return isUserLogguedIn ? (
    <button
      {...rest}
      type='button'
      className={styles.signinButton}
    >
      <FaGithub
        color='#04d361'
      />
      Teilor Souza Barcelos
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
    >
      <FaGithub
        color='#eba417'
      />
      {title}
    </button>
  )
}