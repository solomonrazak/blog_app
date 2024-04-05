// TEMP DATA
  const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
  ]

  const posts = [
    {id:1, title: 'post 1', body: '.....', userId: 1},
    {id:2, title: 'post 2', body: '.....', userId: 2},
    {id:3, title: 'post 3', body: '.....', userId: 3},
    {id:4, title: 'post 4', body: '.....', userId: 4},
  ]


// we are using export cause we will be using it in our components
export const getPost = async () => {
    return posts

}

export const getPosts = async (id) => {
   return posts.find((post) => post.id === id)
}