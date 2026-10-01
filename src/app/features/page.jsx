import React from 'react';

const FeaturesPage = () => {
    return (

        <div className="min-h-screen bg-gray-950 px-4 py-16 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                        Features
                    </p>

                    <h1 className="text-4xl font-bold sm:text-5xl">
                        Everything You Need
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Powerful features designed to make your experience simple,
                        fast, and enjoyable.
                    </p>
                </div>

                {/* Features */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Feature 1 */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                            ⚡
                        </div>

                        <h2 className="mb-3 text-xl font-semibold">
                            Fast & Reliable
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Enjoy a fast and smooth experience with optimized
                            performance and reliable functionality.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                            🔐
                        </div>

                        <h2 className="mb-3 text-xl font-semibold">
                            Secure Authentication
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Keep your account protected with secure authentication
                            and modern security practices.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                            📱
                        </div>

                        <h2 className="mb-3 text-xl font-semibold">
                            Fully Responsive
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Access everything comfortably on mobile, tablet,
                            and desktop devices.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                            🎨
                        </div>

                        <h2 className="mb-3 text-xl font-semibold">
                            Modern Design
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            A clean and modern interface designed for a better
                            user experience.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                            ☁️
                        </div>

                        <h2 className="mb-3 text-xl font-semibold">
                            Cloud Ready
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Store and access your data easily with a scalable
                            cloud-ready architecture.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                            🛠️
                        </div>

                        <h2 className="mb-3 text-xl font-semibold">
                            Easy to Use
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Simple controls and intuitive features make the
                            platform easy for everyone to use.
                        </p>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default FeaturesPage;