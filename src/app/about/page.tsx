import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Monda Hiroki - Software Developer',
	description: 'Learn about Monda Hiroki, a full-stack developer with expertise in building web applications with React, Node.js, and modern web technologies.',
};

export default function AboutPage() {
	return <About />;
}