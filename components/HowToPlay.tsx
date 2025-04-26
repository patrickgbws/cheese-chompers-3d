export function HowToPlay() {
    return (
        <section id="how-to-play" className="py-16" data-oid="1lj7y19">
            <div className="container mx-auto px-4" data-oid="v2vqo-n">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-oid="su8g.x1">
                    How to Play Cheese Chompers 3D
                </h2>

                <div className="max-w-4xl mx-auto" data-oid="c8symoq">
                    <p className="text-lg mb-8" data-oid="fh:nw.x">
                        Getting started with Cheese Chompers 3D is simple, but mastering the game
                        requires practice and strategy. Here's everything you need to know to jump
                        into the cheesy chaos:
                    </p>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12" data-oid="p_va42h">
                        <ul className="list-disc pl-6 space-y-3 text-lg" data-oid="vhl3jf5">
                            <li data-oid="50h8i:7">
                                Start the match in a flat 3D arena with other rat players (AI or
                                real, depending on the build)
                            </li>
                            <li data-oid="4smuq_h">
                                Use classic WASD movement to control your rat character across the
                                platform
                            </li>
                            <li data-oid="30thz.h">
                                Hold Space to jump and perform flips for temporary speed boosts
                            </li>
                            <li data-oid="bfhre:_">
                                Time your movements strategically to collide with opponents and
                                knock them off the edge
                            </li>
                            <li data-oid="pul855m">
                                Stay balanced and avoid being pushed off the arena yourself
                            </li>
                            <li data-oid="-4a7tqe">
                                Cheese Chompers 3D is currently optimized for desktop browser play
                                using the WebGL platform
                            </li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold mb-6" data-oid="zteew0z">
                        Controls in Cheese Chompers 3D
                    </h3>
                    <p className="text-lg mb-6" data-oid="jds3_-1">
                        Master these essential controls to dominate the Cheese Chompers 3D arena:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-oid="a696e:u">
                        <ControlItem
                            control="WASD Keys"
                            description="Move your rat character in all directions across the platform"
                            data-oid="jqjjtay"
                        />

                        <ControlItem
                            control="Space Bar"
                            description="Hold to jump and perform aerial maneuvers"
                            data-oid="lcj85b0"
                        />

                        <ControlItem
                            control="Mid-Air Control"
                            description="Perform flips during jumps for temporary speed boosts"
                            data-oid=".b00sj7"
                        />

                        <ControlItem
                            control="Mouse Movement"
                            description="Adjust your camera angle for better awareness (when available)"
                            data-oid="k.ietfb"
                        />

                        <ControlItem
                            control="Collision Timing"
                            description="Though not a control, timing your collisions in Cheese Chompers 3D is crucial for successful knockouts"
                            data-oid="wk863ws"
                        />
                    </div>

                    <div className="bg-yellow-200 rounded-lg p-8" data-oid="__b2nlx">
                        <h3 className="text-2xl font-bold mb-4" data-oid="n-x8hag">
                            Master the Art of Cheese Chomping
                        </h3>
                        <p className="text-lg mb-6" data-oid="yvp6lka">
                            Whether you're new to physics knockout games or a seasoned player,
                            Cheese Chompers 3D offers an entertaining experience that's easy to
                            learn but challenging to master:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-lg" data-oid="ix483up">
                            <li data-oid="mot:vju">
                                Navigate your wobbly rat with precision using WASD controls for
                                movement
                            </li>
                            <li data-oid="fmdnd0l">
                                Use the Space bar to jump and perform mid-air flips for speed boosts
                            </li>
                            <li data-oid="db6u_i:">
                                Develop strategies to knock opponents off the platform while
                                maintaining your balance
                            </li>
                            <li data-oid="1hjoxwn">
                                Learn to predict physics interactions and use them to your advantage
                            </li>
                            <li data-oid="hh0bep8">
                                Use the arena edges strategically to corner opponents
                            </li>
                            <li data-oid="6x_43j_">
                                Master the timing of your collisions for maximum impact
                            </li>
                        </ul>
                        <div className="mt-8 text-center" data-oid="sgi4oil">
                            <p className="text-lg font-medium mb-4" data-oid="1emc:50">
                                Ready to join the ultimate rodent rumble in Cheese Chompers 3D?
                            </p>
                            <a
                                href="https://cheesechompers3d.cc"
                                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
                                data-oid="z3w:e9z"
                            >
                                Play Cheese Chompers 3D online now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ControlItem({ control, description }: { control: string; description: string }) {
    return (
        <div className="bg-white rounded-lg shadow p-5" data-oid="xedj40v">
            <h4 className="font-semibold text-lg mb-2" data-oid="0xbr3s:">
                {control}
            </h4>
            <p className="text-gray-700" data-oid="7nqgb54">
                {description}
            </p>
        </div>
    );
}
