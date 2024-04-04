import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/13289844/pexels-photo-13289844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
