import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
}

export default function SubscribeButton({
  title = "Subscribe now",
  ...rest
}: Props) {
  return (
    <button
      type='button'
      {...rest}
      className={styles.subscribeButton}
    >{title}</button>
  )
}