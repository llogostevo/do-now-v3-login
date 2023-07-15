import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import LogoutButton from '../../components/LogoutButton'

export default async function Navbar() {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <>
            <div className="navbar bg-base-100">
                {/* Mobile Nav */}
                <div className="navbar-start">
                    {user ? (
                        <>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                                <li><Link href="#" >Track Learning Progress</Link></li>
                                <li>
                                    <summary>Settings</summary>
                                    <ul className="p-2">
                                        <li><Link href="#">Modify Learning Groups</Link></li>
                                        <li><Link href="#">Modify Learning Checklists</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">doNowAI<span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">Beta</span></a>
                        
                        </>
                    ) : (
                        <a className="btn btn-ghost normal-case text-xl">doNowAI<span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">Beta</span></a>
                    )}
                </div>
                {/* Desktop Nav */}
                {user ? (
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="#" >Track Learning Progress</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Settings</summary>
                                <ul className="p-2">
                                    <li><Link href="#">Modify Learning Groups</Link></li>
                                    <li><Link href="#">Modify Learning Checklists</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                ) : ( <></>)}

                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-4">
                            {user.email}
                            <LogoutButton />
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                        >
                        <button className="btn btn-sm glass mx-2">Login</button>
 
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

