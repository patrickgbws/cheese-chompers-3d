export function Features() {
    return (
        <section id="features" className="py-16" data-oid="q9eakxg">
            <div className="container mx-auto px-4" data-oid="_szytjz">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-oid="nuamz96">
                    Exciting Features of Cheese Chompers 3D
                </h2>
                <p className="text-lg text-center max-w-3xl mx-auto mb-12" data-oid="zkydbpm">
                    Cheese Chompers 3D delivers an exhilarating gameplay experience with unique
                    features that set it apart from other physics-based knockout games. From its
                    wobbly rat characters to its explosive effects, every element has been designed
                    to maximize fun and engagement.
                </p>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="r3u2.ra"
                >
                    <FeatureCard
                        title="Wobbly 3D Rats"
                        description="Control comical rodent characters with unpredictable physics"
                        data-oid="0w-089s"
                    />

                    <FeatureCard
                        title="Explosive Knockouts"
                        description="Enjoy spectacular visual effects when you push opponents off the arena"
                        data-oid="-k_wcyl"
                    />

                    <FeatureCard
                        title="Speed-Boosting Flips"
                        description="Perform mid-air flips to gain temporary speed advantages"
                        data-oid="_93l08j"
                    />

                    <FeatureCard
                        title="Dynamic Collisions"
                        description="Experience realistic physics interactions between characters"
                        data-oid="p4kt_b7"
                    />

                    <FeatureCard
                        title="Instant Browser Play"
                        description="Jump into the cheesy chaos directly from your web browser"
                        data-oid="-t-lg5i"
                    />

                    <FeatureCard
                        title="Cheese-Themed Arena"
                        description="Battle in a vibrant, cheese-inspired environment"
                        data-oid="3g._zqa"
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            data-oid=".i6ui43"
        >
            <h3 className="text-xl font-semibold mb-3" data-oid="i80ku5k">
                {title}
            </h3>
            <p className="text-gray-700" data-oid=":qws.30">
                {description}
            </p>
        </div>
    );
}
