export default function Analytics() {
    return (
        <div className="h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Analytics Dashboard
            </h2>
            <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                    <h3 className="text-sm font-medium text-blue-100">Total Visitors</h3>
                    <p className="text-2xl font-bold mt-1">12,345</p>
                    <p className="text-xs text-blue-100 mt-1">↑ 12% from last month</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
                    <h3 className="text-sm font-medium text-green-100">Revenue</h3>
                    <p className="text-2xl font-bold mt-1">$45,678</p>
                    <p className="text-xs text-green-100 mt-1">↑ 8% from last month</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
                    <h3 className="text-sm font-medium text-purple-100">Conversion</h3>
                    <p className="text-2xl font-bold mt-1">3.2%</p>
                    <p className="text-xs text-purple-100 mt-1">↑ 0.5% from last month</p>
                </div>
            </div>
        </div>
    )
}