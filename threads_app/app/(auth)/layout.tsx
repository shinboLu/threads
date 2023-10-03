import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';

export const metadata = {
    title: 'threads',
    description: 'A Next.js Meta Threads appliction',
}
const inter = Inter({ subsets: ['latin'] })

export default function Rootlayout({
    children }: {
        children: React.ReactNode
    }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className='{inter.className} bg-dark-1'>{children}</body>
                {children}
            </html>
        </ClerkProvider>)

} 