![Printscreen of the project](/.github/screenshot.png)
 
## TsbNews
 
<p>This app was developed in a programming course of Nextjs of the <a target="_blank" href="https://app.rocketseat.com.br/">Rocketseat</a> online school, in the Ignite course for advanced developers.</p>
<p>This app is a JAM Stack, SSR & SSG app bootstrapped with <a target="_blank" href="https://nextjs.org">[Create Next App]</a> and, basically, it is a blog of news, the <a target="_blank" href="https://fauna.com/">FaunaDB</a> was used for store all the data, the login system was made with Github API, the shop system was made with <a target="_blank" href="https://stripe.com/">stripe</a> API and the posts system was made with <a target="_blank" href="https://prismic.io/">prismic CMS</a>, after all, I added the responsivity to layout for my own.</p>
 
 
## Technology 
 
Here are the technologies used in this project.
 
* @prismicio/client version 5.1.0,
* @stripe/stripe-js version 1.22.0,
* axios version 0.24.0,
* faunadb version 4.4.1,
* next version 12.0.7,
* next-auth version 4.0.5,
* prismic-dom version 2.2.6,
* react version 17.0.2,
* react-dom version 17.0.2,
* react-icons version 4.3.1,
* sass version 1.44.0,
* stripe version 8.193.0
 
 
## Services Used
 
* FaunaDB
* Github
* Stripe.com
* Prismic.io
 
## Getting started
 
<p>You can see the app runing <a target="_blank" href="https://tsbnews.vercel.app/">here</a></p>
<p>But, if you want to run this app by yourself, simply create an account in all the services needed (github, faunadb, stripe and prisma cms) create a project in each one, and replace the configs in the .env.local.example, and after, rename it to .env.local, after it, run "yarn", in next run "stripe listen --forward-to localhost:3000/api/webhooks" and for last, open a new terminal and run "yarn dev" :tada:</p>

## How to use
 
This project is usefull for those that want to create a paid newsletter, you can publish news and sale the subscription for anyone and receive your incomes in the stripe dashboard.
 
 
## Links
 
  - Link of deployed application: https://tsbnews.vercel.app/
  - Repository: https://github.com/teilorbarcelos/tsbnews
    - In case of sensitive bugs like security vulnerabilities, please contact
      OUR EMAIL directly instead of using issue tracker. We value your effort
      to improve the security and privacy of this project!
 
 
## Versioning
 
0.1.0
 
 
## Authors
 
* **TEILOR SOUZA BARCELOS**: @teilorbarcelos (https://github.com/teilorbarcelos)
 
 
## Learn More

You can learn more in the <a target="_blank" href="https://nextjs.org/docs/getting-started">[Next documentation]</a>.

<p>I hope it help you like it helped me too! Thanks for see it and give a repo star if you like it!</p>

# TsbNews

############################################################

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
