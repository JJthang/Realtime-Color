import React from "react"

type Post = {
    id: number
    title: string
}

export const revalidate = 10

async function getData(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 15 },
    })
    console.log('gui len');

    return res.json()
}

export default async function PostsPage() {
    const posts = await getData().then(() => {
        console.log("thanh cong");
    })

    return (
        <div>
            <h1>Danh sách bài viết (ISR sau 10s)</h1>
            <ul>
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
