export function WhyChoose() {
    return (
        <section className="py-16" data-oid=":.7dq0e">
            <div className="container mx-auto px-4" data-oid="uvp09_4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-oid="-2suq0f">
                    Why Choose Cheese Chompers 3D? The Ultimate Rodent Experience
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    data-oid="160:y2z"
                >
                    <ReasonCard
                        title="Hilarious Physics"
                        description="Cheese Chompers 3D delivers unpredictable and entertaining physics interactions between wobbly rat characters, creating laugh-out-loud moments with every collision and knockout."
                        data-oid="vsgluu."
                    />

                    <ReasonCard
                        title="Unique Rat Characters"
                        description="Unlike other animal knockout games, Cheese Chompers 3D features comical rodent characters with their own movement style, giving the game a fresh and distinctive feel."
                        data-oid="-cat6jh"
                    />

                    <ReasonCard
                        title="Speed-Boost Mechanics"
                        description="Master the art of mid-air flips to gain temporary speed advantages, adding a strategic layer to the frantic gameplay that rewards skillful maneuvering."
                        data-oid="h5..v.9"
                    />
                </div>
            </div>
        </section>
    );
}

function ReasonCard({ title, description }: { title: string; description: string }) {
    return (
        <div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-400"
            data-oid="0jgp1ly"
        >
            <h3 className="text-xl font-bold mb-3" data-oid="u.ew3i2">
                {title}
            </h3>
            <p className="text-gray-700" data-oid="5f6685u">
                {description}
            </p>
        </div>
    );
}
