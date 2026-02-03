import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andres | Backend Engineer & Systems Developer",
  description: "Backend engineer specializing in high-performance systems, load balancers, and memory optimization. Expert in Rust, Node.js, C++, and GraphQL. Former malware analyst.",
  keywords: ["Backend Engineer", "Systems Developer", "Rust", "Node.js", "C++", "GraphQL", "Load Balancer", "Performance Optimization", "Malware Analysis"],
  authors: [{ name: "Andres" }],
  creator: "Andres",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Andres | Backend Engineer & Systems Developer",
    description: "Backend engineer specializing in high-performance systems, load balancers, and memory optimization.",
    siteName: "Andres Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andres | Backend Engineer & Systems Developer",
    description: "Backend engineer specializing in high-performance systems, load balancers, and memory optimization.",
    creator: "@hyusband",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
