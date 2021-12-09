import SignInButton from '../SignInButton'
import styles from './styles.module.scss'
export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <img src="/images/logo.svg" alt="tsb.news logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}