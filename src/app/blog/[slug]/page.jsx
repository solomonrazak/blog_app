import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";


// import this from data.js to fetch without an api
// import { getPosts } from "../../../../lib/data";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

// SEO in dynamic pages
export const generateMetadata = async ({params}) => {
  const {slug} = params
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // fetch dat with an api
  // const posts = await getData();


  // fetch data without an api
  const post = await getData(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/13289844/pexels-photo-13289844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt="singlePost"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/13289844/pexels-photo-13289844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="fill"
            fill
          />
          {/* we can a create a component called skeleton to display when loading when using suspense */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

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
