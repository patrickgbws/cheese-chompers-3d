import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Cheese Chompers 3D: Play Free Unblocked Game',
    description:
        'Cheese Chompers 3D is a hilarious fast-paced knockout game where you control wobbly rats in chaotic battles across a vibrant arena. Play for free in your browser!',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="43g:i8w">
            <body className="bg-yellow-50 text-gray-900 overflow-y-auto" data-oid="_akq7..">
                {children}
            </body>
        </html>
    );
}
