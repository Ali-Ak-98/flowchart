import { fetchAPI } from '@/lib/api';

export default async function AboutPage() {
    const content = await fetchAPI('/about-pages');
    console.log(content)

    if (!content) return <p>Loading...</p>;

    return (
        <div className={'flex flex-col space-y-3'}>
            <h1 className={'text-3xl'}>{content[0]?.title}</h1>
            <p className={'text-md'}>{content[0]?.body}</p>
            {content[0]?.banner?.map((image) => (
                <img
                    className={'w-1/3 object-contain'}
                    key={image.url}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL+image?.url}`}
                    alt={image?.alternativeText || 'About'}
                />
            ))}
        </div>
    );
}
