'use client'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { fadeIn, planetVariants, staggerContainer } from '@/utils'
import { NewFeatures, TitleText, TypingText } from '@/components'
import { newFeatures } from '@/constants'
export function WhatsNew() {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer(0, 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
			>
				<motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-[0.95] flex justify-center flex-col">
					<TypingText title="| What's New?" />
					<TitleText title="What's new about Metaversus?" />
					<div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
						{newFeatures.map(feature => (
							<NewFeatures
								key={feature.title}
								imgUrl={feature.imgUrl}
								title={feature.title}
								subtitle={feature.subtitle}
							/>
						))}
					</div>
				</motion.div>
				<motion.div variants={planetVariants('right')} className={`${styles.flexCenter} flex-1`}>
					<img src="/public/whats-new.png" alt="whats new" className="w-[90%] h-[90%] object-contain" />
				</motion.div>
			</motion.div>
		</section>
	)
}
