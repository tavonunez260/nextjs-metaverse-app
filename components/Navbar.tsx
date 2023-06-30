'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from '@/styles'
import { navVariants } from '@/utils'

export function Navbar() {
	return (
		<motion.nav animate="show" className={`${styles.xPaddings} py-8 relative`} initial="hidden" variants={navVariants}>
			<div className="absolute w-[50%] inset-0 gradient-01" />
			<div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
				<Image alt="search" className="object-contain" height={24} src="/search.svg" width={24} />
				<h2 className="font-extrabold text-[24px] leading-[24px] text-white">METAVERSUS</h2>
				<Image alt="menu" className="object-contain" height={24} src="/menu.svg" width={24} />
			</div>
		</motion.nav>
	)
}
