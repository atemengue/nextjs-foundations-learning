import Link from 'next/link';

const Page = () => {
  return (
    <div>
        <h1>COnference</h1>
        <h2>
          <Link href="/conference/speakers">Speakers</Link>
        </h2>
        <h2>
          <Link href="/conference/sessions">Sessions</Link>
        </h2>
    </div>
  )
}

export default Page;