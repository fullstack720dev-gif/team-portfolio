import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Code Forge',
	description: 'Get in touch with Code Forge, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}