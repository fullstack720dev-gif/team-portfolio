'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "30+ Projects",
			description: "Completed full-stack web applications"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "10+ Internships",
			description: "Professional work experience"
		},
	];

	const interests = [
		"Web Development",
		"UI/UX Design",
		"Cloud Computing",
		"DevOps",
		"Open Source",
		"Artificial Intelligence",
		"AI Trading",
		"Crypto and Blockchain"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Us
				</motion.h2>
			</ScrollAnimation>

			<div className="gap-8">

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							OrbitStack is a distributed software engineering team delivering end-to-end product development for startups and growing businesses.
						</p> 
						<p className="text-gray-300 leading-relaxed">
							With team members across the Philippines, Singapore, and the other countries, we operate as a remote-first unit built for speed, clarity, and consistent delivery across time zones. 
						</p> 
						<p className="text-gray-300 leading-relaxed">
							We build scalable solutions across mobile and web applications, frontend and backend systems, AI-enabled features, and blockchain-based platforms—always with a focus on security, performance, and maintainability.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Our approach combines strong technical execution with structured communication: clear requirements, fast iterations, and transparent progress from planning to deployment. 
						</p>
						<p className="text-gray-300 leading-relaxed">
							We work comfortably with modern stacks and cloud infrastructure, integrating APIs, databases, real-time systems, and third-party services to meet real production needs. 
						</p>
						<p className="text-gray-300 leading-relaxed">
							Whether you need an MVP, a full product rebuild, or a dedicated team to extend your existing platform, we bring senior-level engineering discipline, reliable delivery, and long-term partnership mindset.
						</p>
					</div>

				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;