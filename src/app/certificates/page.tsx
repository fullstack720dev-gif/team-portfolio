import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Monda Hiroki',
	description: 'View Monda Hiroki\'s certifications and achievements in web development, programming, and other technical skills.',
};

export default function CertificatesPage() {
	return <Certificates />;
}