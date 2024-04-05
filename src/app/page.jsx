import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p>This Agency offers the best solution to all client Services</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/images/brands.png" fill alt="" className={styles.brand}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/images/hero.gif" alt="" className={styles.heroImg} width={900} height={900}/>
      </div>

    </div>
  )
}

export default Home;

