'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="py-16 bg-gradient-to-b from-yellow-400 to-yellow-50" data-oid="x:t6d.r">
            <div className="container mx-auto px-4" data-oid="ej.8t_w">
                <div className="flex flex-col items-center gap-8" data-oid="bb50dze">
                    <div className="text-center" data-oid="2fm4ien">
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            data-oid="9vgip00"
                        >
                            Cheese Chompers 3D
                        </h1>
                    </div>

                    <div id="game-section" className="w-full max-w-4xl" data-oid="vdotf05">
                        <div
                            className="bg-gray-200 rounded-lg overflow-hidden shadow-xl aspect-video relative"
                            data-oid="qf3cbw_"
                        >
                            <div className="relative w-full h-0 pb-[56.25%]" data-oid="o7iuik_">
                                <iframe
                                    src="https://html-classic.itch.zone/html/13493920/CheeseChompers3DWeb/index.html"
                                    className="absolute top-0 left-0 w-full h-full"
                                    allowFullScreen
                                    allow="fullscreen; autoplay; clipboard-write"
                                    loading="lazy"
                                    title="Cheese Chompers 3D Game"
                                    data-oid="691zc_9"
                                ></iframe>
                            </div>
                            <div className="absolute bottom-4 right-4 z-10" data-oid="kbxpv1w">
                                <FullscreenButton data-oid="is3ivi4" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center" data-oid="y6rjhha">
                        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto" data-oid="gub39m7">
                            <Link
                                href="https://cheesechompers3d.cc/"
                                className="font-bold block mb-2 text-xl md:text-2xl hover:text-yellow-700 transition-colors"
                                data-oid="je32d.z"
                            >
                                Cheese Chompers 3D
                            </Link>
                            is a hilarious fast-paced knockout game where you control wobbly rats in
                            chaotic battles across a vibrant arena.
                        </p>
                    </div>
                </div>

                <div
                    className="mt-8 mb-8 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl aspect-video relative"
                    data-oid="4o_kil7"
                >
                    <iframe
                        src="https://www.youtube.com/embed/zU0L5ueGA3o"
                        className="w-full h-full"
                        title="Cheese Chompers 3D Gameplay Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        data-oid="e05ac2w"
                    ></iframe>
                </div>

                <div className="flex flex-wrap justify-center gap-4 py-2" data-oid="owqdjm-">
                    <SocialLink platform="Facebook" data-oid="s8tco2_" />
                    <SocialLink platform="Email" data-oid="jhz90m." />
                    <SocialLink platform="Twitter" data-oid="d7pswbq" />
                    <SocialLink platform="Linkedin" data-oid="w1i0p8v" />
                    <SocialLink platform="WhatsApp" data-oid="49pzfbo" />
                    <SocialLink platform="Reddit" data-oid="0:0uvhl" />
                </div>
            </div>
        </section>
    );
}

function FullscreenButton() {
    const handleFullscreen = () => {
        // 获取游戏iframe
        const gameIframe = document.querySelector('iframe[title="Cheese Chompers 3D Game"]');

        if (gameIframe) {
            // 检测是否是移动设备
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) {
                // 移动设备上，打开新窗口或重定向到游戏URL
                window.open(
                    'https://html-classic.itch.zone/html/13493920/CheeseChompers3DWeb/index.html',
                    '_blank',
                );
            } else {
                // 桌面设备上使用标准全屏API
                if (gameIframe.requestFullscreen) {
                    gameIframe.requestFullscreen();
                } else if ((gameIframe as any).webkitRequestFullscreen) {
                    (gameIframe as any).webkitRequestFullscreen();
                } else if ((gameIframe as any).msRequestFullscreen) {
                    (gameIframe as any).msRequestFullscreen();
                }
            }
        }
    };

    return (
        <button
            onClick={handleFullscreen}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 md:px-3 md:py-2 rounded-md text-base md:text-sm font-medium transition-colors"
            data-oid="43nlr2m"
        >
            Fullscreen
        </button>
    );
}

function SocialLink({ platform }: { platform: string }) {
    return (
        <Link
            href="#"
            className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-yellow-600 transition-colors"
            aria-label={platform}
            data-oid="1ngcbqv"
        >
            {/* This would ideally use actual icons */}
            <span className="sr-only" data-oid="kzgasuq">
                {platform}
            </span>
            <span className="text-sm md:text-xs" data-oid="e-yboj.">
                {platform.charAt(0)}
            </span>
        </Link>
    );
}
