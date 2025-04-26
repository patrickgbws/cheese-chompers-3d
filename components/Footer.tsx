import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-yellow-400 text-gray-900 py-8 mt-16" data-oid="xlbbcqn">
            <div className="container mx-auto px-4" data-oid="7t4hilc">
                <div className="flex flex-col items-center" data-oid="czes784">
                    <h2
                        className="text-2xl font-bold tracking-tight uppercase mb-6"
                        data-oid="1bgc2tb"
                    >
                        C H E E S E C H O P E R S 3 D
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 mb-6" data-oid="mjfnox9">
                        <Link
                            href="/"
                            className="hover:text-yellow-800 transition-colors"
                            data-oid="tpo18fo"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-yellow-800 transition-colors"
                            data-oid="a_bz3ld"
                        >
                            About
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-yellow-800 transition-colors"
                            data-oid="tua1fp6"
                        >
                            Terms of Use
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-yellow-800 transition-colors"
                            data-oid="-awp.uv"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="https://github.com"
                            className="hover:text-yellow-800 transition-colors"
                            data-oid="5mlze11"
                        >
                            GitHub
                        </Link>
                    </div>

                    <div className="text-center text-sm" data-oid="7p:1b7j">
                        © 2025 cheesechompers3d.cc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
