import { GetServerSideProps } from 'next'
import Head from "next/head"
import SubscribeButton from "../components/SubscribeButton"
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface Props {
  product: {
    priceId: string
    value: number
  }
}

export default function Home({ product }: Props) {
  return (
    <>
      <Head>
        <title>Home | tsb.news</title>
      </Head>

      <main className={styles.container}>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.value} month</span>
          </p>
          <SubscribeButton
            priceId={product.priceId}
          />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding image" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1K4w7sBoAg3Zms0MR81FRjB3')

  const product = {
    priceId: price.id,
    value: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product
    }
  }
}