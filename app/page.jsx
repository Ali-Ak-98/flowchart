'use client';

import { fetchAPI } from '@/lib/api';
import {useEffect, useState} from "react";

export default function Homepage() {
    const [content,setContent]=useState(false)

    useEffect( () => {
        fetchAPI('/homepages').then(res=>{
            console.log(res)
            setContent(res)
        })
    }, []);

    if (!content) return <p>Loading...</p>;

    return (
        <div>
            <h1 className={'text-3xl my-2'}>{content[0]?.title}</h1>
            <p>{content[0]?.body}</p>
        </div>
    );
}
