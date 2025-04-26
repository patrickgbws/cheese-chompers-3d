import Image from 'next/image';

export function SimilarGames() {
    return (
        <section className="py-16 bg-yellow-100" data-oid="zs07d51">
            <div className="container mx-auto px-4" data-oid="yy6p1x4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-oid="umwzzbj">
                    Explore Games Like Cheese Chompers 3D
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="t1m:6t2">
                    <GameCard
                        title="Crazy Cattle 3D"
                        description="The original chaos engine that inspired Cheese Chompers 3D! While Cheese Chompers 3D focuses on rat characters, this version lets you take control of wild cows in this frantic knockout arena filled with silly physics and chaotic energy. Push your bovine opponents off the map in this time-limited mod packed with unpredictable collisions."
                        data-oid="b3plu-1"
                    />

                    <GameCard
                        title="Crazy Sheep 3D"
                        description="A fluffy take on arena combat where you play as bouncy sheep battling to stay on the platform. Experience the same physics-based knockout action as Cheese Chompers 3D, but with a woolly twist, featuring hilariously unbalanced matchups and chaotic collisions."
                        data-oid="gin011m"
                    />

                    <GameCard
                        title="Crazy Chicken 3D"
                        description="Swap cows for chickens and battle with clucks and feathers flying in this barnyard brawl. Enjoy the same wild gameplay and physics-driven action that makes Cheese Chompers 3D so popular, but with a completely new poultry-themed experience that's guaranteed to entertain."
                        data-oid="flmql:v"
                    />
                </div>
            </div>
        </section>
    );
}

function GameCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-oid="3rs:s4r">
            <div className="h-48 bg-gray-300 relative" data-oid="322adxw">
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    data-oid="z4jzwjs"
                >
                    <p className="text-xl font-medium" data-oid="ojym050">
                        {title} Preview
                    </p>
                </div>
            </div>
            <div className="p-6" data-oid="5dwxqii">
                <h3 className="text-xl font-bold mb-3" data-oid=":-_417.">
                    {title}
                </h3>
                <p className="text-gray-700" data-oid=":8tx38z">
                    {description}
                </p>
            </div>
        </div>
    );
}
