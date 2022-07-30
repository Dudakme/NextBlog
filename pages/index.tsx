import * as React from 'react';
import Layout from '../components/Layout'
import styles from '../styles/List.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'


interface props {
    data: Array<any>,
}

export default function Home(props: props) {

    const i = new Array(20).fill({
        no: 123,
        title: "this is the title section for the math app"
    })

    const [useRay, setRay] = useState([{
        no: 123,
        title: "this is the title section for the math app"
    }])

    useEffect(() => {
        setRay(i);
    }, [])
    return (
        <Layout>

                <h1>블로그 리스트</h1>

                <table className={styles.list}>
                    <tbody>

                        <tr className={styles.mainlistRow}>
                            <th>id</th>
                            <th>title</th>
                            <th>date</th>
                            <th>description</th>
                        </tr>
                    {
                        props.data.map((r, index) => (
                            <tr className={styles.listRow}>
                                <th>{r.id}</th>
                                <th>
                                    {
                                        r.title.length < 30 ? <Link href={`/questions/${r.id}`}>{r.title}</Link>
                                            : <Link href={`/questions/${r.id}`}>{`${r.title.substring(0, 30)}..`}</Link>
                                    }
                                </th>
                                <th>
                                    <Link href={`/questions/${r.id}`}>{r.date.substring(0, 10)}</Link>
                                </th>
                                <th>
                                    <Link href={`/questions/${r.id}`}>{`${r.description.substring(0, 38)}...`}</Link>
                                </th>
                            </tr>
                        ))
                    }
                    </tbody>

                </table>
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
