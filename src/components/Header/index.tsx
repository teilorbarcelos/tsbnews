import Link from 'next/link'
import SignInButton from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <img src="/images/logo.svg" alt="tsb.news logo" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}