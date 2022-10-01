import React from 'react'

type Props = {
    pg: number,
    setPage: (pg: number) => void,
    isPreviousData: boolean
}

const PageButton = ({ pg, setPage, isPreviousData }: Props) => {
    return (
        <button
            onClick={() => setPage(pg)}
            disabled={isPreviousData}
        >
            {pg}
        </button>
    )
}

export default PageButton