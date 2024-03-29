# Form-Builder-Next14-Prisma-Sqlite

## Getting Started

### Cloning the repository

```shell
git clone https://github.com/Kliton/yt_pageform.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL="file:./dev.db"
```

### Setup Prisma

Add Sqlite Database

```shell
npx prisma migrate dev

```

### Start the app

```shell
npm run dev
```

## Acknowledgment

This project drew inspiration or guidance from the YouTube video [Link to Video](https://www.youtube.com/watch?v=QGXUUXy0AMw). Special thanks to the creator for their valuable insights.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.