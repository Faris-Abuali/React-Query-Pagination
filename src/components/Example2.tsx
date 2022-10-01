import React from 'react'
import { useQuery } from "react-query";
import { getUsersPage } from "../api/axios";
import { useState } from "react";
import User from "./User";
import PageButton from "./PageButton";

type Props = {}

const Example2 = (props: Props) => {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    isError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(["/users", page], () => getUsersPage(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading Users...</p>

  if (isError) return <p>Error: {(error as any).message}</p>

  const Content = users.data.map((user: any) => <User key={user.id} user={user} />)

  const lastPage = () => setPage(users.total_pages);
  const firstPage = () => setPage(1);

  const pagesArray = Array(users.total_pages).fill(0).map((_, index) => index + 1);

  const Nav = (
    <nav className="nav-ex2">
      <button onClick={firstPage} disabled={isPreviousData || page === 1}>&lt;&lt;</button>
      {pagesArray.map((pg: number) => <PageButton key={pg} pg={pg} setPage={setPage} isPreviousData={isPreviousData} />)}
      <button onClick={lastPage} disabled={isPreviousData || page === users.total_pages}>&gt;&gt;</button>
    </nav>
  )

  // disable all buttons when the `isPreviousData` flag is true, because the data is still being fetched.
  return (
    <>
      {Nav}
      {isFetching && <p>Fetching Users...</p>}
      {Content}
    </>
  )
}

export default Example2