import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  priceId: string
}

export default function SubscribeButton({
  title = "Subscribe now",
  priceId,
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