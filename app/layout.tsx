import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from '@/components/navbar/Navbar';
import { GeistSans } from 'geist/font/sans';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
    title: 'WRS WEEIA',
    description: 'Oficjalna strona WRS WEEIA Politechniki Łódzkiej',
    keywords: [
        'WRS',
        'EEIA',
        'WEEIA',
        'WRS WEEIA',
        'Politechnika Łódzka',
        'Łódź',
        'studia',
        'studenci',
        'studenckie',
        'samorząd',
        'samorząd studencki',
        'samorząd studencki WEEIA',
        'strona WRS WEEIA',
    ],
    applicationName: 'Strona WRS WEEIA',
    metadataBase: new URL('https://wrs-weeia.vercel.app'),
    openGraph: {
        title: 'Oficjalna strona WRS WEEIA',
        description: 'Oficjalna strona WRS WEEIA Politechniki Łódzkiej',
        type: 'website',
        locale: 'pl_PL',
        siteName: 'Strona WRS WEEIA',
        url: 'https://wrs-weeia.vercel.app',
        images: [
            {
                url: 'https://wrs-weeia.vercel.app/logo_WEEIA_WRS.jpg',
                width: 510,
                height: 330,
                alt: 'WRS WEEIA',
            },
        ],
    },
    manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={GeistSans.className}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem disableTransitionOnChange>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
