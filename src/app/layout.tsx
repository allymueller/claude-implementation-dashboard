import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claude for Enterprise - Implementation Portal",
    template: "%s | Claude Enterprise Implementation"
  },
  description: "Your dedicated implementation portal for configuring, managing, and scaling Claude across your organization. Thoughtfully designed for enterprise deployment success.",
  keywords: [
    "Claude Enterprise",
    "Enterprise AI", 
    "Business AI",
    "AI for Teams",
    "Secure AI",
    "AI Collaboration",
    "Enterprise Security",
    "AI Implementation",
    "Business Automation",
    "AI Productivity"
  ],
  authors: [{ name: "Anthropic" }],
  creator: "Anthropic",
  publisher: "Anthropic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claude-enterprise.com",
    siteName: "Claude Enterprise Implementation",
    title: "Claude for Enterprise - Implementation Portal",
    description: "Your dedicated implementation portal for configuring, managing, and scaling Claude across your organization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claude for Enterprise"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude for Enterprise - Implementation Portal",
    description: "Your dedicated implementation portal for configuring, managing, and scaling Claude across your organization.",
    images: ["/og-image.png"],
    creator: "@anthropicai"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://claude-enterprise.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Hotjar Tracking */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Claude for Enterprise",
              "description": "Enterprise AI platform that scales with your business",
              "url": "https://claude-enterprise.com",
              "logo": "https://claude-enterprise.com/logo.png",
              "sameAs": [
                "https://twitter.com/anthropicai",
                "https://www.linkedin.com/company/anthropic"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "sales",
                "availableLanguage": "English"
              },
              "offers": {
                "@type": "Offer",
                "name": "Claude for Enterprise",
                "description": "Enterprise AI platform with advanced security and collaboration features",
                "category": "Software"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
