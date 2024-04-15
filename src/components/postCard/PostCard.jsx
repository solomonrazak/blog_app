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
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}c</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
