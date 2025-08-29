// app/dashboard/layout.tsx
export default function DashboardLayout({
    children,
    analytics,
    team,
    user,
}: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
    user: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50 grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                {children}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    {user}
                </section>

                <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    {team}
                </section>
            </div>

            {/* Analytics Panel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                {analytics}
            </div>
        </div>
    )
}