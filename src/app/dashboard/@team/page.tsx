export default function Team() {
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Team Members
            </h3>
            <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        JD
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">John Doe</p>
                        <p className="text-xs text-gray-500">Developer</p>
                    </div>
                    <div className="ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        JS
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                        <p className="text-xs text-gray-500">Designer</p>
                    </div>
                    <div className="ml-auto">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        BJ
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Bob Johnson</p>
                        <p className="text-xs text-gray-500">Manager</p>
                    </div>
                    <div className="ml-auto">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}