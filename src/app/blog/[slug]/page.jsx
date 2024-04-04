import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/13289844/pexels-photo-13289844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt="singlePost"
        />
      </div>
      <div className={textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/13289844/pexels-photo-13289844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="fill"
            fill
          />
          <div className={styles.detailedText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Solomon Razak</span>
          </div>
          <div className={styles.detailedText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iure
          consectetur eos, officia magni id praesentium dignissimos earum
          incidunt possimus ut facilis voluptatem ratione error, nisi doloribus
          pariatur optio voluptates!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
