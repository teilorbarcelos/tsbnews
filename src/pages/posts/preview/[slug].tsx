import { GetStaticProps } from "next"
import { useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { RichText } from "prismic-dom"
import { useEffect } from "react"
import SubscribeButton from "../../../components/SubscribeButton"
import { getPrismicClient } from "../../../services/prismic"
import { stripe } from "../../../services/stripe"

import styles from '../styles.module.scss'

interface PostPreview {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
  product: {
    priceId: string
    value: string
  }
}

export default function PostPreview({ post, product }: PostPreview) {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{post.title} | tsbnews</title>
      </Head>

      <main
        className={styles.postContainer}
      >
        <article
          className={styles.post}
        >
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={`${styles.postContent} ${styles.previewContent}`}
          />

          <div className={styles.continueReading}>
            Wanna continue reading?

            <SubscribeButton
              title="Subscribe now 🤗"
              priceId={product.priceId}
              defaultButton={false}
            />
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const prismic = getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  const price = await stripe.prices.retrieve('price_1K4w7sBoAg3Zms0MR81FRjB3')

  const product = {
    priceId: price.id,
    value: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }


  return {
    props: { post, product },
    revalidate: 60 * 30 // time to generate new page (one time a day) (Only for SSG)
  }
}