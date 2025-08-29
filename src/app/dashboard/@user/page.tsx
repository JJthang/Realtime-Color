export default function User() {
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                User Profile
            </h3>
            <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">A</span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Welcome back!</p>
                <p className="text-xl font-bold text-gray-900 mb-4">Admin User</p>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                    Edit Profile
                </button>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Last login:</span>
                        <span>2 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}