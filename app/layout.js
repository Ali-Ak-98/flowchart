import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <nav>
            <ul className={'flex justify-center items-center w-full'}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
            </ul>
        </nav>
        <main>{children}</main>
        </body>
        </html>
    );
}
