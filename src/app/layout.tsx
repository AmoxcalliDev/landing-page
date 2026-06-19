import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amoxcalli | La Casa del Conocimiento Digital",
  description:
    "Del náhuatl 'casa de libros, biblioteca'. Comunidad global de desarrolladores donde el código se comparte, se mejora y se celebra juntos. Open source para todos.",
  keywords:
    "Amoxcalli, open source, comunidad global de desarrolladores, código abierto, México, náhuatl, ByFruits, GitHub, TypeScript, JavaScript, colaboración",
  authors: [{ name: "Amoxcalli Dev" }],
  metadataBase: new URL("https://amoxcalli.dev"),
  alternates: {
    canonical: "https://amoxcalli.dev/",
  },
  openGraph: {
    type: "website",
    url: "https://amoxcalli.dev/",
    siteName: "Amoxcalli Dev",
    title: "Amoxcalli | La Casa del Conocimiento Digital",
    description:
      "La Casa del Conocimiento Digital de México y todo el mundo. Comunidad open source donde desarrolladores comparten código, aprenden juntos y construyen herramientas para la comunidad.",
    images: [
      {
        url: "https://amoxcalli.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amoxcalli — La Casa del Conocimiento Digital",
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amoxcalli | La Casa del Conocimiento Digital",
    description:
      "Del náhuatl 'casa de libros'. Comunidad global open source — el código es mejor cuando se comparte.",
    images: ["https://amoxcalli.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amoxcalli Dev",
              alternateName: "Amoxcalli",
              url: "https://amoxcalli.dev",
              logo: "https://amoxcalli.dev/og-image.png",
              description:
                "Del náhuatl 'casa de libros, biblioteca'. Comunidad global de desarrolladores comprometidos con el código abierto. El código es mejor cuando se comparte.",
              sameAs: [
                "https://github.com/AmoxcalliDev",
                "https://discord.amoxcalli.dev",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@amoxcalli.dev",
                contactType: "community support",
              },
              knowsAbout: [
                "Open Source",
                "Desarrollo de Software",
                "Comunidad de Desarrolladores",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Docker",
                "GitHub",
              ],
              foundingLocation: {
                "@type": "Place",
                name: "México",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
