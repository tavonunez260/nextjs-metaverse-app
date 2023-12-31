'use client'

import { motion } from 'framer-motion'

import styles from '@/styles'
import { fadeIn, staggerContainer } from '@/utils'
import { TitleText, TypingText } from '@/components'
import moduleExports from '@/next.config'

export function World() {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer(0, 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title="| People on the world" textStyles="text-center" />
				<TitleText
					title="Track friends around you and invite them to play together in the same world."
					textStyles="text-center"
				/>
				<motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px] ">
					<img src={`${moduleExports.assetPrefix || ''}/map.png`} alt="map" className="w-full h-full object-cover" />
					<div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
						<img src={`${moduleExports.assetPrefix || ''}/people-01.png`} alt="people 2" className="w-full h-full " />
					</div>
					<div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
						<img src={`${moduleExports.assetPrefix || ''}/people-01.png`} alt="people 3" className="w-full h-full " />
					</div>
					<div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
						<img src={`${moduleExports.assetPrefix || ''}/people-01.png`} alt="people 1" className="w-full h-full " />
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}
