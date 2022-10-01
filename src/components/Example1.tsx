import React from 'react'
import { getPostPage } from "../api/axios";
import { useState, useEffect } from "react";
import Post from "./Post";

type Props = {}

const Example1 = (props: Props) => {
    const [page, setPage] = useState<number>(1);
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        getPostPage(page).then((json) => {
            setPosts(json);
            console.log(json);
        });
    }, [page]);

    const Content = posts.map((post: any) => <Post key={post.id} post={post} />);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => prev - 1);


    return (
        <>
            <nav>
                <button onClick={prevPage} disabled={page === 1}>Prev page</button>
                <button onClick={nextPage} disabled={!posts.length}>Next page</button>
            </nav>
            {Content}
        </>
    )
}

export default Example1