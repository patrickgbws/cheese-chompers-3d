import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
    return (
        <header
            className="bg-yellow-400 text-gray-900 py-4 sticky top-0 z-50 shadow-md"
            data-oid="mtw8fqk"
        >
            <div className="container mx-auto px-4" data-oid="bcsmyqf">
                <div
                    className="flex flex-col md:flex-row justify-between items-center"
                    data-oid="w0q--fw"
                >
                    <div className="text-center md:text-left mb-4 md:mb-0" data-oid="mbid-u_">
                        <h1
                            className="text-3xl font-bold tracking-tight uppercase"
                            data-oid=".38pfmu"
                        >
                            <Link href="/" data-oid="7cg6xlq">
                                C H E E S E C H O M P E R S 3 D
                            </Link>
                        </h1>
                    </div>
                    <nav data-oid="3pagvxk">
                        <ul
                            className="flex flex-wrap justify-center gap-6 text-lg font-medium"
                            data-oid="xal7_ip"
                        >
                            <li data-oid="uzciyt2">
                                <Link
                                    href="/"
                                    className="hover:text-yellow-800 transition-colors"
                                    data-oid="mfdi4o0"
                                >
                                    Home
                                </Link>
                            </li>
                            <li data-oid="komuj5-">
                                <Link
                                    href="#features"
                                    className="hover:text-yellow-800 transition-colors"
                                    data-oid="y4bim5-"
                                >
                                    Features
                                </Link>
                            </li>
                            <li data-oid="esgngss">
                                <Link
                                    href="#how-to-play"
                                    className="hover:text-yellow-800 transition-colors"
                                    data-oid="4-01dl7"
                                >
                                    How to Play
                                </Link>
                            </li>
                            <li data-oid="py5pd_7">
                                <Link
                                    href="#tips"
                                    className="hover:text-yellow-800 transition-colors"
                                    data-oid="2ehxhgf"
                                >
                                    Tips
                                </Link>
                            </li>
                            <li data-oid=":2qdofj">
                                <Link
                                    href="#game-section"
                                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
                                    data-oid="y2swzdf"
                                >
                                    Play Now
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
