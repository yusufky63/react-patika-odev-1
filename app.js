import axios from 'axios'

export async function getData(userId) {
    const { data: users } = await
    axios(`https://jsonplaceholder.typicode.com/users/${userId}`)

    const { data: posts } = await
    axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    console.log("USERS", users, "POSTS", posts)
}