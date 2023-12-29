import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from '@/components/navbar/Navbar';
import { GeistSans } from 'geist/font/sans';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
    title: 'WRS EEIA',
    description: 'Oficjalna strona WRS EEIA Politechniki Łódzkiej',
    keywords: 'WRS, EEIA, Politechnika Łódzka, Łódź, studia, studenci, studenckie, samorząd, samorząd studencki',
    applicationName: 'Strona WRS EEIA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${GeistSans.className} bg-primary`}>
                <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
