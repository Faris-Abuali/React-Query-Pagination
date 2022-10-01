import React from 'react'

type Props = {}

const User = ({ user }: any) => {
    return (
        <article>
            <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
            />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
            <p title='user ID'>User ID: {user.id}</p>
        </article>
    )
}

export default User