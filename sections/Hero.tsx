'use client'
import { motion } from 'framer-motion'

import styles from '@/styles'
import { slideIn, staggerContainer, textVariant } from '@/utils'

export function Hero() {
	return (
		<section className={`${styles.yPaddings}`}>
			<motion.div
				className={`${styles.innerWidth} mx-auto flex flex-col`}
				variants={staggerContainer(0, 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				<div className="flex justify-center items-center flex-col relative">
					<motion.h1
						className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white z-10"
						variants={textVariant(1.1)}
					>
						Metaverse
					</motion.h1>
					<motion.div className="flex flex-row justify-center items-center z-10" variants={textVariant(1.2)}>
						<h1 className={styles.heroHeading}>Ma</h1>
						<div className={styles.heroDText} />
						<h1 className={styles.heroHeading}>Ness</h1>
					</motion.div>
					<motion.div
						variants={slideIn('right', 'tween', 0.2, 1)}
						className="relative w-full md:-mt-[60px] -mt-[52px] z-0"
					>
						<div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -z-10 -top-[30px]" />
						<img
							src="/public/cover.png"
							alt="cover"
							className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px]"
						/>
						<a href="#explore">
							<div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px]">
								<img
									src="/public/stamp.png"
									alt="stamp"
									className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
								/>
							</div>
						</a>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}

export default Hero
