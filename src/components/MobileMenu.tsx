"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)


	return (
		<div className="md:hidden">
			<div
				onClick={() => setIsOpen(prev => !prev)} className="flex flex-col gap-[4.5px] cursor-pointer">
				<div className={`ease-in-out duration-200 origin-left ${isOpen ? "rotate-45" : ''} w-6 h-1 bg-blue-500 rounded-sm`} />
				<div className={`ease-in-out duration-200 ${isOpen ? "opacity-0" : ''} w-6 h-1 bg-blue-500 rounded-sm`} />
				<div className={`ease-in-out duration-200 origin-left ${isOpen ? "-rotate-45" : ''} w-6 h-1 bg-blue-500 rounded-sm`} />
			</div>
			{
				isOpen && <div className="absolute top-24 left-0 right-0 w-full h-[calc(100vh-6rem)] bg-white flex flex-col gap-8 items-center justify-center font-medium text-xl z-10">
					<Link href="/">Home</Link>
					<Link href="/">Friends</Link>
					<Link href="/">Groups</Link>
					<Link href="/">Stories</Link>
					<Link href="/">Login</Link>
				</div>
			}
		</div>
	)
}