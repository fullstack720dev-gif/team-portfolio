'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
	const [copied, setCopied] = useState(false);
	const email = 'www.starlester114@gmail.com';
	const whatsappNumber = '+';

	const { data: githubData } = useSWR('https://api.github.com/users/fullstack720dev-gif', fetcher);
	function formatRepoCount(count: number): string {
		if (count < 5) return count.toString();
		return `${Math.floor(count / 5) * 5}+`;
	}
	const githubRepos = githubData?.public_repos || 0;
	const displayRepos = formatRepoCount(githubRepos);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	const handleEmailClick = (e: React.MouseEvent) => {
		if (window.innerWidth <= 640) { // sm breakpoint
			window.location.href = `mailto:${email}`;
			e.preventDefault();
		} else {
			copyToClipboard();
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
			<div className="text-center relative z-10 max-w-4xl mx-auto">
				<motion.h1
					className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					OrbitStack
				</motion.h1>
				<motion.h1
					className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					We design & code for web
				</motion.h1>

				<motion.p
					className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}	
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Software Developers specializing in Full Stack Development with expertise in Next.js, Node.js and modern Web Technologies.
				</motion.p>

				<motion.div
					className="flex flex-col items-center gap-4 sm:gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex justify-center space-x-3 sm:space-x-4">
						<Link
							href="/about"
							className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
						>
							<User className="w-4 h-4 sm:w-5 sm:h-5" />
							About Us
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;