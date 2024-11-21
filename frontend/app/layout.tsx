import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

// Importer le type Metadata si nécessaire en fonction de votre utilisation
import { Metadata } from 'next'; // Assurez-vous que cela provient du bon chemin du module

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Fadj-Ma",
  description: "next app",
};

// Typage des props avec ReactNode pour le children
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        {children} 
      </body>
    </html>
  );
}