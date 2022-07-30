import { useRouter } from 'next/router'
import { useState } from 'react'

import Layout from '../components/Layout'

// val id: Int,
//     val title: String,
//     val description: String,
//     val answer: String

interface props {
    data: Array<any>,
}


export default function question({ data }: props) {
    const [Id, setId] = useState("");
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");

    const d = new Date();

    console.log(data.length)

    async function handleCompose() {
        await fetch('api/addBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: data.length + 1, title: Title, description: Desc, date: d})
        });
    }

    return (
        <Layout>
            <input type="text" value={Title} onChange={(e) => { setTitle(e.target.value)}} />
            <textarea cols={60} rows={8} value={Desc} onChange={(e) => { setDesc(e.target.value)}} />
            <button onClick={handleCompose}>결과보기</button>
        </Layout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

