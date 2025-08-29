export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        <span className="ml-3 text-blue-600 font-semibold">Đang tải...</span>
    </div>
}