"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageLoader({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!pathname) return;

        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 3000);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {loading ?
                (<div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>) : children
            }
        </>
    );
}
