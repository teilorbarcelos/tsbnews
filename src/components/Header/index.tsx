import { useState } from 'react'
import HamburgerIcon from '../HamburgerIcon'
import { Logo } from '../Logo'
import ModalMenu from '../ModalMenu'
import { NavLinks } from '../NavLinks'
import SignInButton from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  const [modalMenuOpen, setModalMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.container}>
        <div>
          {/* <img src="/images/logo.svg" alt="ig.news logo" /> */}
          <Logo className={styles.logo} />
          <nav>
            <NavLinks />
          </nav>

          <HamburgerIcon
            modalMenuOpen={modalMenuOpen}
            setModalMenuOpen={setModalMenuOpen}
          />

          <SignInButton />
        </div>
      </header>

      <ModalMenu
        modalMenuOpen={modalMenuOpen}
        setModalMenuOpen={setModalMenuOpen}
      />
    </>
  )
}