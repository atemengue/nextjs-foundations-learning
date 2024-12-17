import OurtStoryPic from '@/images/home-image-1.jpg';
import Image from 'next/image';
import styles from './home.module.css';

const Page = () => {
  return (
    <>
    <div className={styles.bgWrap}>
        <Image src={OurtStoryPic} alt='Our story pic' 
        sizes={"100vw"}
        fill
        style={{ objectFit: "cover" }}
        quality={100} placeholder='blur' />
    </div>
        <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </>

  )
}

export default Page;