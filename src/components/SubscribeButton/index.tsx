import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ButtonHTMLAttributes } from 'react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  priceId: string
  defaultButton?: boolean
}

export default function SubscribeButton({
  title = "Subscribe now",
  priceId,
  defaultButton = true,
  ...rest
}: Props) {
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return defaultButton ? (
    <button
      type='button'
      {...rest}
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >{title}</button>
  ) : (
    <a
      onClick={handleSubscribe}
      className={styles.a}
    >{title}</a>
  )
}