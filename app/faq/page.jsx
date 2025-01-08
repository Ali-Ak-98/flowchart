'use client'

import { fetchAPI } from '@/lib/api';

export default async function FAQPage() {
    const faqs = await fetchAPI('/fa-qss');
    console.log(faqs)

    if (!faqs) return <p>Loading...</p>;

    return (
        <div>
            <h1 className={'text-3xl mb-3'}>FAQs</h1>
            {faqs.map((faq) => (
                <div key={faq?.id} className={'my-2'}>
                    <h3 className={'font-bold text-xl'}>{faq?.question}</h3>
                    <p>{faq?.answer}</p>
                </div>
            ))}
        </div>
    );
}
