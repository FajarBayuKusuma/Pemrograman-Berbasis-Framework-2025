import React from 'react';

const User = ({ users }) => {
    if (!users) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Daftar Pengguna</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2> {/* Menggunakan name yang sesuai dengan API */}
                    <p>Email: {user.email}
                        Id: {user.id}
                    </p>
                </div>
            ))}
        </div>
    );
};

// Perbaiki nama fungsi menjadi getStaticProps
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users, // Mengirim data users ke komponen sebagai props
        },
    };
}

export default User;
