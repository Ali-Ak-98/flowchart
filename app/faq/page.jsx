'use client'

import { fetchAPI } from '@/lib/api';
import {useEffect, useState} from "react";

export default function FAQPage() {
    const [content,setContent]=useState(false)

    useEffect( () => {
        fetchAPI('/fa-qss').then(res=>{
            console.log(res)
            setContent(res)
        })
    }, []);

    if (!content) return <p>Loading...</p>;

    return (
        <div>
            <h1 className={'text-3xl mb-3'}>FAQs</h1>
            {content.map((data) => (
                <div key={data?.id} className={'my-2'}>
                    <h3 className={'font-bold text-xl'}>{data?.question}</h3>
                    <p>{data?.answer}</p>
                </div>
            ))}
        </div>
    );
}
