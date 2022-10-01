import React from 'react'

type Props = {}

const Post = ({ post }: any) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
            <p className="post-id" title='post ID'>{post.id}</p>
        </article>
    )
}

export default Post