import { Dispatch, SetStateAction } from 'react'
import { NavLinks } from '../NavLinks'
import styles from './styles.module.scss'

interface Props {
  modalMenuOpen: boolean
  setModalMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function ModalMenu({ modalMenuOpen, setModalMenuOpen }: Props) {
  return (
    <div
      className={`${styles.modalMenu} ${modalMenuOpen ? styles.visible : ''}`}
      onClick={() => setModalMenuOpen(false)}
    >
      <NavLinks />
    </div>
  )
}