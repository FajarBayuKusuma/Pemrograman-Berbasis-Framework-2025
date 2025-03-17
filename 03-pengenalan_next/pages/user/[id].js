import { useRouter } from 'next/router';

const UserPost = ({user}) => {
    const router = useRouter();
    const { id } = router.query;

    // return(
    //     <div>
    //         <h1>Id User: {id}</h1>
    //         <p>ini adalah daftar user sesuai dengan {id}</p>
    //     </div>
    // )
    return (
        <div>
            <h1>Daftar Pengguna</h1>

                <div>
                    <h1>Data pengguna dengan id: {id}</h1>
                    <h2>{user.name}</h2> {/* Menggunakan name yang sesuai dengan API */}
                    <p>Email: {user.email}
                    </p>
                </div>
        </div>
    );
}
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user)=>({
        params: {id:user.id.toString()}, // `params.id` akan berisi ID pengguna

    }));

    return {paths, fallback: false};
}

export async function getStaticProps({ params }) {
    console.log(params); // 🧐 Akan mencetak { id: "1" }, { id: "2" }, dst.

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: { user },
    };
}

export default UserPost;