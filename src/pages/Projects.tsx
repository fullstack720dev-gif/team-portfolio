'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Scott Farmer Hair Salon',
		description: 'Top hair salon in Sarasota County Florida. Top-quality haircuts, coloring, and balayage highlights at Scott Farmer Hair Salon. Schedule online today!',
		image: '/projects_img/project-1.jpg',
		github: 'https://github.com/niladri-1/LiveDocs',
		live: 'https://scottfsalon.com/',
		tags: ["WordPress", "PHP"]
	},
	{
		title: 'Save Rack Fulfillment',
		description: 'Save Rack provides top-rated e-commerce fulfillment services at affordable prices with guaranteed 24-hour e-commerce order fulfillment.',
		image: '/projects_img/project-2.png',
		github: 'https://github.com/niladri-1/Figma-Clone',
		live: 'https://saverack.com/',
		tags: ["WordPress", "Laravel", "MySQL"]
	},
	{
		title: 'RuneStake by OrdinalSigmaX',
		description: 'Litecoin Ordinals marketplace | Buy & Sell Litecoins NFT LTC20 Litemap using ordinals.fun decentralized PSBT marketplace.',
		image: '/projects_img/project-3.png',
		github: 'https://github.com/niladri-1/Video-Conferencing-App',
		live: 'https://runestake.io/',
		tags: ["Tailwind CSS", "React.js", "Next.js", "Clerk", "Stream"]
	},
	{
		title: 'Ordinals.fun',
		description: 'Litecoin Ordinals marketplace | Buy & Sell Litecoins NFT LTC20 Litemap using ordinals.fun decentralized PSBT marketplace.',
		image: '/projects_img/project-4.png',
		github: 'https://github.com/niladri-1/Video-Conferencing-App',
		live: 'https://ordinals.fun/',
		tags: ["Webflow"]
	},
	{
		title: 'Side',
		description: 'We build solutions to skyrocket your project. Are you a Degen? Receive points and airdrops every single day.',
		image: '/projects_img/project-5.png',
		github: 'https://github.com/niladri-1/Gemini-Chatbot',
		live: 'https://side.xyz/',
		tags: ['Vue.js', 'Svelte', 'Tailwind CSS']
	},
	{
		title: 'solana-token-command-center',
		description: "Explore Aires Tech's advanced EMF protectors for your cell phone and digital lifestyle. Shield against EMF radiation! Better than an EMF blocker.",
		image: '/projects_img/project-6.png',
		github: 'https://github.com/niladri-1/Travel-App',
		live: 'https://adm.sparkgen.org/',
		tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
	},
	{
		title: 'Pixie Boutique',
		description: "Explore Aires Tech's advanced EMF protectors for your cell phone and digital lifestyle. Shield against EMF radiation! Better than an EMF blocker.",
		image: '/projects_img/project-7.png',
		github: 'https://github.com/niladri-1/Travel-App',
		live: 'https://www.thepixieboutique.com/',
		tags: ['Shopify', 'Tailwind CSS', 'Amazon Web Services']
	},
	{
		title: 'airestech',
		description: "Explore Aires Tech's advanced EMF protectors for your cell phone and digital lifestyle. Shield against EMF radiation! Better than an EMF blocker.",
		image: '/projects_img/project-8.png',
		github: 'https://github.com/niladri-1/Travel-App',
		live: 'https://airestech.com/',
		tags: ['Amazon Web Services', 'React.js', 'Tailwind CSS']
	},
	{
		title: 'Chomps',
		description: "Chomps Snack Sticks are sourced from 100% grass-fed & finished beef and venison, paleo & whole30 approved, and certified gluten free. If you’re looking for a delicious on-the-go snack that's packed with both protein and flavor, try Chomps!",
		image: '/projects_img/project-9.jpg',
		github: 'https://github.com/niladri-1/Brainwave-Project',
		live: 'https://chomps.com/',
		tags: ['Shopify', 'JavaScript', 'Liquid']
	},
	{
		title: 'Fan Girl Clothing',
		description: "Fan Girl Clothing is a women-owned company that creates stylish and affordable game day apparel. Our designs are inspired by our love of sports and rooting for our home team. Whether it's licensed college apparel or everyday wear, Fan Girl stands out with high quality apparel with unique details.",
		image: '/projects_img/project-10.jpg',
		github: 'https://github.com/niladri-1/Brainwave-Project',
		live: 'https://fangirlclothing.com/',
		tags: ['Shopify', 'JavaScript', 'Liquid']
	},
	{
		title: 'Leotard Boutique',
		description: "Discover quality toddler dance leotards at Leotard Boutique. Enjoy specials sales and discounts on long sleeve styles in pink, white, nude, black, and more.",
		image: '/projects_img/project-11.png',
		github: 'https://github.com/niladri-1/Brainwave-Project',
		live: 'https://leotardboutique.com/',
		tags: ['Shopify', 'JavaScript', 'Liquid']
	},
	{
		title: 'AM Private Coaching',
		description: "Step Into Greatness with AM Coaching: Where Potential Meets Mastery.",
		image: '/projects_img/project-12.png',
		github: 'https://github.com/niladri-1/Brainwave-Project',
		live: 'https://winwitham.com/',
		tags: ['Amazon Web Services', 'React.js', 'Tailwind CSS']
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Feature Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<ExternalLink className="w-4 h-4" />
										<span>Live</span>
									</a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;