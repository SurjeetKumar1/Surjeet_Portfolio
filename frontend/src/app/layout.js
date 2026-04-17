import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Surjeet | Professional Portfolio",
  description: "Surjeet’s Professional Portfolio - High-performance personal brand platform with a Next.js/Framer Motion frontend and a custom Node.js admin dashboard.",
  icons: {
    icon: "https://res.cloudinary.com/di6zndqso/image/upload/v1776321622/ChatGPT_Image_Apr_16_2026_12_09_26_PM_nodjzy.png",
  },
  openGraph: {
    title: "Surjeet | Professional Portfolio",
    description: "High-performance personal brand platform built with Next.js and Framer Motion.",
    url: "https://www.surjeet.in",
    siteName: "Surjeet Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/di6zndqso/image/upload/v1776331860/Screenshot_2026-04-16_at_3.00.43_PM_gmm3ax.png",
        width: 1200,
        height: 630,
        alt: "Surjeet Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surjeet | Professional Portfolio",
    description: "High-performance personal brand platform built with Next.js and Framer Motion.",
    images: ["https://res.cloudinary.com/di6zndqso/image/upload/v1776331860/Screenshot_2026-04-16_at_3.00.43_PM_gmm3ax.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className=" mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-screen pb-32 lg:pb-8">
          <Sidebar />
          <div className="flex-1">
            {children}
          </div>
        </main>
        <footer className="hidden lg:block text-center py-4 text-white/40 text-sm border-t border-white/5 mt-12">
          © 2026 Surjeet | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
