'use client';

import { fetchAPI } from '@/lib/api';
import {useEffect, useState} from "react";

export default async function Homepage() {
    const [content,setContent]=useState(false)
    useEffect(async () => {
        setContent(await fetchAPI('/homepages'));
    }, []);

    console.log(content)
    if (!content) return <p>Loading...</p>;

    return (
        <div>
            <h1 className={'text-3xl my-2'}>{content[0]?.title}</h1>
            <p>{content[0]?.body}</p>
        </div>
    );
}
