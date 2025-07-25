'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Menu() {
    // const pathname = usePathname()
    // const [currentMenuItem, setCurrentMenuItem] = useState("")

    // useEffect(() => {
    //     setCurrentMenuItem(pathname)
    // }, [pathname])

    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""
    const [isAccordion, setIsAccordion] = useState(0)

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            {/* <ul className="menu">
                <li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
                    <Link href="/#">Home</Link>
                    <ul className="sub-menu">
                        <li className={`item ${checkCurrentMenuItem("/")}`}>
                            <Link href="//">Home 1</Link>
                        </li>
                        <li className={`item ${checkCurrentMenuItem("/home-02")}`}>
                            <Link href="//home-02">Home 2</Link>
                        </li>
                    </ul>
                </li>
                <li className={`item ${pathname === "/about" ? "active" : ""}`}>
                    <Link href="//about">about</Link>
                </li>
            </ul> */}
            <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
               <li className="menu-item position-relative">
                    <Link href="/" className="fw_500">
                        Accueil
                    </Link>
                </li>
                 <li className="menu-item position-relative">
                    <Link href="/" className="fw_500">
                        À propos
                    </Link>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(2)}>
                        Services
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
                        <li className="menu-link py-1">
                            <Link href="#" className="fw_500 white-clr">Développement Web & Mobile</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="#" className="fw_500 white-clr">Community Management</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="#" className="fw_500 white-clr">Graphisme & Design</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="#" className="fw_500 white-clr">Audiovisuel & Motion Design</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="#" className="fw_500 white-clr">Marketing Digital & Publicité</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="#" className="fw_500 white-clr">Stratégie & Consulting</Link>
                        </li>
                      
                    </ul>
                </li>
               
                 <li className="menu-item position-relative">
                    <Link href="/" className="fw_500">
                        Contact
                    </Link>
                </li>
                
               
            </ul>
        </>
    )
}

