'use client'

import Link from 'next/link'
import { ExpandMore, ArrowOutward } from '@mui/icons-material'

const NavLinks = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <nav className="flex items-center gap-4 font-medium">
            <Link href="#banner" onClick={(e) => handleScroll(e, 'banner')} className="flex items-center gap-1 px-3">
                Figma Plugin
                <ArrowOutward sx={{ width: '20px', height: '20px' }} />
            </Link>

            <Link href="#customer" onClick={(e) => handleScroll(e, 'customer')} className="px-3">
                Dogs
            </Link>

            <Link
                href="#reason"
                onClick={(e) => handleScroll(e, 'reason')}
                className="flex items-center gap-1 px-3 py-1 border rounded-lg border-black-10"
            >
                Templates
                <ExpandMore sx={{ width: '20px', height: '20px' }} />
            </Link>
        </nav>
    )
}

export default NavLinks
