export function FAQ() {
    return (
        <section className="py-16" data-oid="gp-k6b_">
            <div className="container mx-auto px-4" data-oid="4luiwik">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-oid="2ymo3pw">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl mx-auto space-y-6" data-oid="ux5dis4">
                    <FAQItem
                        question="Can I play Cheese Chompers 3D for free?"
                        answer="Yes! Cheese Chompers 3D is completely free to play directly in your web browser. Just visit our website, click 'Play Now,' and jump into the cheesy chaos immediately without any downloads required."
                        data-oid="3iu1n7j"
                    />

                    <FAQItem
                        question="What makes Cheese Chompers 3D different from other knockout games?"
                        answer="Cheese Chompers 3D stands out with its unique rat characters, cheese-themed environment, and distinctive physics system. The mid-air flip mechanic for speed boosts adds a strategic element not found in similar games, while the explosive knockout effects create satisfying moments of triumph."
                        data-oid="yyrn_00"
                    />

                    <FAQItem
                        question="Is Cheese Chompers 3D suitable for all ages?"
                        answer="Absolutely! Cheese Chompers 3D is family-friendly and perfect for players of all ages. The intuitive controls and whimsical presentation make it accessible to everyone, while the physics-based gameplay offers depth for more experienced players."
                        data-oid="oi11p9x"
                    />

                    <FAQItem
                        question="Can I play Cheese Chompers 3D on mobile devices?"
                        answer="Cheese Chompers 3D is primarily optimized for desktop browsers at the moment, but we're working on mobile compatibility to ensure you can enjoy the rodent rumble on the go. For the best experience, we currently recommend playing on a computer."
                        data-oid="gv60en2"
                    />
                </div>

                <div className="text-center mt-12" data-oid="lkv91t2">
                    <h3 className="text-2xl font-bold mb-4" data-oid="4jndeaj">
                        Join the Cheese Chompers 3D Community
                    </h3>
                    <div className="flex justify-center gap-4" data-oid="04uyno_">
                        <SocialButton platform="Discord" data-oid="6gli6ax" />
                        <SocialButton platform="Twitter" data-oid="_.u1fsy" />
                        <SocialButton platform="Reddit" data-oid="6o71j4h" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6" data-oid="0u1-:e8">
            <h3 className="text-xl font-bold mb-3" data-oid="n3fu3jt">
                {question}
            </h3>
            <p className="text-gray-700" data-oid="s99o6td">
                {answer}
            </p>
        </div>
    );
}

function SocialButton({ platform }: { platform: string }) {
    return (
        <a
            href="#"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
            data-oid="7zh-:8g"
        >
            Join on {platform}
        </a>
    );
}
