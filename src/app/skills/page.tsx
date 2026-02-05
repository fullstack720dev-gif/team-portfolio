import Skills from '@/pages/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Skills & Expertise - OrbitStack',
	description: 'Explore OrbitStack\'s technical skills and expertise in programming languages, front-end and back-end development, databases, and more.',
};

export default function SkillsPage() {
	return <Skills />;
}