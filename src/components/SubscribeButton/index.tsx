import { signIn, useSession } from 'next-auth/react'
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
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }


  }

  return (
    <button
      type='button'
      {...rest}
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >{title}</button>
  )
}