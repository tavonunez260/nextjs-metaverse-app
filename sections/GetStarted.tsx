'use client'

import styles from '@/styles'

import { motion } from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '@/utils'
import { StartSteps, TitleText, TypingText } from '@/components'
import { startingFeatures } from '@/constants'

export function GetStarted() {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer(0, 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
			>
				<motion.div variants={planetVariants('left')} className={`${styles.flexCenter} flex-1`}>
					<img src="/get-started.png" alt="get started" className="w-[90%] h-[90%] object-contain" />
				</motion.div>
				<motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col ">
					<TypingText title="| How Metaversus Works" />
					<TitleText title="Get started with just a few clicks" />
					<div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
						{startingFeatures.map((feature, index) => (
							<StartSteps key={feature} number={index + 1} text={feature} />
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}
