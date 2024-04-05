import styles from './PostUser.module.css';

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    if(!res.ok){
      throw new Error('something went wrong')
    }
    return res.json()
  }

const PostUser = async ({userId}) => {

    const user = await getData(userId);
  return (
    
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
          </div>
   
  )
}

export default PostUser