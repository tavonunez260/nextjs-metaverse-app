'use client'

import styles from '@/styles'
import { staggerContainer } from '@/utils'
import { motion } from 'framer-motion'
import { InsightCard, TitleText, TypingText } from '@/components'
import { insights } from '@/constants'
export function Insights() {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer(0, 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title="| Insight" textStyles="text-center" />
				<TitleText title="Insight about metaverse." textStyles="text-center" />
				<div className="mt-[50px] flex flex-col gap-[50px]">
					{insights.map((insight, index) => (
						<InsightCard key={`insight_${index + 1}`} {...insight} index={index + 1} />
					))}
				</div>
			</motion.div>
		</section>
	)
}
