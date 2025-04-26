export function Gameplay() {
    return (
        <section className="py-16 bg-yellow-100" data-oid="-rw4045">
            <div className="container mx-auto px-4" data-oid="a0umj5s">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-oid="45x_waj">
                    Master the Physics in Cheese Chompers 3D
                </h2>

                <div className="max-w-4xl mx-auto" data-oid="aw5hj1q">
                    <p className="text-lg mb-8" data-oid="f4p:fp8">
                        Cheese Chompers 3D presents an engaging gameplay system where timing,
                        momentum, and strategy are key to victory. Control your wobbly rat with
                        precision, utilize the arena dynamics, and outsmart your opponents with
                        clever maneuvers. The game features innovative mechanics that create
                        unpredictable and entertaining matches:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" data-oid="qrpnfnm">
                        <GameplayFeature
                            title="Advanced Physics Engine"
                            description="Experience realistic movement, balance, and collisions between rat characters"
                            data-oid="ee7jdct"
                        />

                        <GameplayFeature
                            title="Strategic Bumping"
                            description="Master the art of timing your collisions to knock opponents off the platform"
                            data-oid="xo.onuf"
                        />

                        <GameplayFeature
                            title="Aerial Control"
                            description="Learn to perform flips in mid-air for speed boosts and better positioning"
                            data-oid="a-_.v63"
                        />

                        <GameplayFeature
                            title="Momentum Management"
                            description="Use your rat's weight and movement to gain advantages in close encounters"
                            data-oid=":g8pbif"
                        />
                    </div>

                    <h3 className="text-2xl font-bold mb-6" data-oid="1geq2tq">
                        Game Objectives in Cheese Chompers 3D
                    </h3>
                    <p className="text-lg mb-6" data-oid="la-qi6e">
                        In Cheese Chompers 3D, your mission is straightforward but challenging:
                        survive the chaotic rodent battle in the exciting world of Cheese Chompers
                        3D and emerge as the ultimate cheese champion!
                    </p>

                    <div className="space-y-6 mb-8" data-oid="awruv2y">
                        <ObjectiveItem
                            title="Survive"
                            description="Stay on the platform as long as possible while chaos unfolds around you. Balance your rat carefully and avoid being pushed to the edge by opponents."
                            data-oid="lq:njd8"
                        />

                        <ObjectiveItem
                            title="Knock Out Rivals"
                            description="Use clever movement, momentum, and precise timing to push, bump, and bash your fellow rodents off the map. Each successful knockout is rewarded with a satisfying explosion effect."
                            data-oid="fmolthf"
                        />

                        <ObjectiveItem
                            title="Master Movement"
                            description="Learn to utilize mid-air flips for temporary speed boosts, allowing you to quickly close in on rivals or escape dangerous situations. Mastering the physics is key to dominating the arena."
                            data-oid="cn:d3aw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function GameplayFeature({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white rounded-lg shadow p-5" data-oid="npkvm7r">
            <h4 className="font-semibold text-lg mb-2" data-oid="b6q896o">
                {title}
            </h4>
            <p className="text-gray-700" data-oid="ixz45w7">
                {description}
            </p>
        </div>
    );
}

function ObjectiveItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white rounded-lg shadow p-6" data-oid="i717q8e">
            <h4 className="font-semibold text-xl mb-2" data-oid="hgrf_ao">
                {title}
            </h4>
            <p className="text-gray-700" data-oid="9.5ef67">
                {description}
            </p>
        </div>
    );
}
