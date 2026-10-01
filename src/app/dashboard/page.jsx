import React from 'react';

const page = () => {
    return (

        <div className="min-h-screen bg-gray-950 px-4 py-8 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="mt-2 text-gray-400">
                        Welcome back! Here’s what’s happening today.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                        <p className="text-sm text-gray-400">Total Users</p>
                        <h2 className="mt-2 text-3xl font-bold">1,248</h2>
                        <p className="mt-2 text-sm text-green-400">+12.5% this month</p>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                        <p className="text-sm text-gray-400">Total Projects</p>
                        <h2 className="mt-2 text-3xl font-bold">36</h2>
                        <p className="mt-2 text-sm text-blue-400">8 active projects</p>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                        <p className="text-sm text-gray-400">Completed</p>
                        <h2 className="mt-2 text-3xl font-bold">28</h2>
                        <p className="mt-2 text-sm text-green-400">78% completion rate</p>
                    </div>

                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                        <p className="text-sm text-gray-400">Pending</p>
                        <h2 className="mt-2 text-3xl font-bold">8</h2>
                        <p className="mt-2 text-sm text-yellow-400">Needs attention</p>
                    </div>

                </div>

                {/* Main Content */}
                <div className="mt-8 grid gap-6 lg:grid-cols-3">

                    {/* Recent Activity */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 lg:col-span-2">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Recent Activity</h2>
                            <button className="text-sm text-blue-400 hover:text-blue-300">
                                View All
                            </button>
                        </div>

                        <div className="space-y-5">

                            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                                <div>
                                    <h3 className="font-medium">New project created</h3>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                                    Completed
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                                <div>
                                    <h3 className="font-medium">Profile updated</h3>
                                    <p className="text-sm text-gray-500">5 hours ago</p>
                                </div>
                                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                                    Updated
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">New task assigned</h3>
                                    <p className="text-sm text-gray-500">Yesterday</p>
                                </div>
                                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                                    Pending
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                        <h2 className="mb-6 text-xl font-semibold">Quick Actions</h2>

                        <div className="space-y-3">
                            <button className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium transition hover:bg-blue-700">
                                + Create Project
                            </button>

                            <button className="w-full rounded-xl border border-gray-700 px-4 py-3 font-medium transition hover:bg-gray-800">
                                View Projects
                            </button>

                            <button className="w-full rounded-xl border border-gray-700 px-4 py-3 font-medium transition hover:bg-gray-800">
                                Manage Profile
                            </button>

                            <button className="w-full rounded-xl border border-gray-700 px-4 py-3 font-medium transition hover:bg-gray-800">
                                Settings
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    );
};

export default page;