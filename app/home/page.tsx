import Link from 'next/link';

const Page = () => {
  return (
    <div>
        <h1>Home</h1>
        <h2>
          <Link href="/blog">Blog</Link>
        </h2>
        <h2>
          <Link href="/settings">Settings</Link>
        </h2>
        <h2>
          <Link href="/conference">Conference</Link>
        </h2>
    </div>
  )
}

export default Page;