import Link from 'next/link';

const Page = () => {
  return (
    <div>
        <h1>Speakers</h1>
        <h2>
          <Link href="/conference">Back to Conference</Link>
        </h2>
    </div>
  )
}

export default Page;