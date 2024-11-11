import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from '@/components/navbar/Navbar';
import { GeistSans } from 'geist/font/sans';
import Footer from '@/components/footer/Footer';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AssistantSidebar } from '@/components/assistant-sidebar/AssistantSidebar';

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
    verification: {
        google: 'OGP2Iea1vrfSWnglcU1sIHw4bgkWrGySwJ8xIn_5NJU',
    },
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
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={GeistSans.className}>
                <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
                    <SidebarProvider defaultOpen={false}>
                        <AssistantSidebar />
                        <main className='w-screen'>
                            <Navbar />
                            {children}
                            <Footer />
                        </main>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
