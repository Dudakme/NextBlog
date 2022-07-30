import { useRouter } from 'next/router'
import { useState } from 'react'

import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'

export default function question({ data }: any) {
    const router = useRouter();
    const { id } = router.query;
    const [AnswerInput, setAnswerInput] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    function handleAnsSubmit() {
        AnswerInput == data.answer && setIsCorrect(true);
    }

    return (
        <Layout>
            <BlogCard date={new Date(data.date).toDateString()} question={data.title} description={data.description}/>
        </Layout>
    )
}

export async function getServerSideProps(context: any) {
    const { id } = context.query;
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/getBlog?id=${id}`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } }
}

