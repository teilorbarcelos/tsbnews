import ActiveLink from "../ActiveLink"
import styles from './styles.module.scss'

export function NavLinks() {
  return (
    <>
      <ActiveLink
        href="/"
        activeClassName={styles.active}
      >
        <a>Home</a>
      </ActiveLink>
      <ActiveLink
        href="/posts"
        activeClassName={styles.active}
      >
        <a>Posts</a>
      </ActiveLink>
    </>
  )
}