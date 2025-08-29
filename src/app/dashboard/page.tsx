export default function Dashboard() {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome to your dashboard. Monitor your key metrics and team activity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-blue-900">Quick Actions</h3>
                        <span className="text-2xl">⚡</span>
                    </div>
                    <div className="space-y-2">
                        <button className="w-full text-left px-3 py-2 text-sm text-blue-700 hover:bg-blue-200 rounded-lg transition-colors">
                            📊 View detailed reports
                        </button>
                        <button className="w-full text-left px-3 py-2 text-sm text-blue-700 hover:bg-blue-200 rounded-lg transition-colors">
                            👥 Manage team members
                        </button>
                        <button className="w-full text-left px-3 py-2 text-sm text-blue-700 hover:bg-blue-200 rounded-lg transition-colors">
                            ⚙️ System settings
                        </button>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-green-900">Recent Activity</h3>
                        <span className="text-2xl">📈</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-green-800">New user registered</span>
                            <span className="text-xs text-green-600 ml-auto">5m ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-green-800">Report generated</span>
                            <span className="text-xs text-green-600 ml-auto">12m ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm text-green-800">System backup completed</span>
                            <span className="text-xs text-green-600 ml-auto">1h ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}