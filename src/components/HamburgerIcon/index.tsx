import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.scss'

interface Props {
  modalMenuOpen: boolean
  setModalMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function HamburgerIcon({ modalMenuOpen, setModalMenuOpen }: Props) {
  return (
    <div
      className={`${styles.hamburgerIcon} ${modalMenuOpen ? styles.open : ''}`}
      onClick={() => setModalMenuOpen(!modalMenuOpen)}
    >
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </div>
  )
}