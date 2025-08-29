import React, { memo, useEffect, useState } from 'react'

type Props = {
    isOpen: boolean,
    onToggle: () => void
}

const Sidebar = ({ isOpen, onToggle }: Props) => {
    const [user, setUser] = useState<{
        name: string
    } | null>(null);
    console.log('====================================');
    console.log("HE LLOWR OLS");
    console.log('====================================');

    useEffect(() => {
        const controller = new AbortController();

        fetch("https://jsonplaceholder.typicode.com/users/1", {
            signal: controller.signal,
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => {
                if (err.name !== "AbortError") {
                    console.error("Fetch error:", err);
                }
            });

        // Cleanup: hủy request khi component unmount
        return () => controller.abort();
    }, []);

    const clickSetValue = () => {
        localStorage.setItem("infoUser", JSON.stringify({
            name: "thang pham",
            age: 20
        }));
    }
    const menuItems = [
        // { icon: Home, label: 'Trang chủ', href: '#' },
        // { icon: User, label: 'Hồ sơ', href: '#' },
        // { icon: Mail, label: 'Tin nhắn', href: '#' },
        // { icon: Phone, label: 'Liên hệ', href: '#' },
        // { icon: Settings, label: 'Cài đặt', href: '#' },
    ];



    return (
        <>
            <div className='bg-gray-100'>
                <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } 2xl:w-1/5 lg:inset-0`} >
                    <button onClick={clickSetValue} className='py-4 px-2 bg-blue-400 cursor-pointer' >Click Me for set value</button>
                </div>
                <div>{user ? user.name : "Loading..."}</div>
                {
                    isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 " onClick={() => {
                        onToggle()
                    }} />
                }
            </div>
        </>
    )
}

export default memo(Sidebar)