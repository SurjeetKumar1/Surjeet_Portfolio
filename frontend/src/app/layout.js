import "./globals.css";
import Sidebar from "@/components/Sidebar";

const img = "https://res.cloudinary.com/di6zndqso/image/upload/v1776333545/WhatsApp_Image_2026-04-16_at_15.28.21_rjse4q.jpg";

export const metadata = {
  metadataBase: new URL('https://www.surjeet.in'),
  title: "Surjeet | Professional Portfolio",
  description: "Discover the professional portfolio, innovative full-stack projects, and technical milestones of Surjeet – a Software Engineer focused on algorithmic excellence and scalable solutions.",
  icons: {
    icon: "https://res.cloudinary.com/di6zndqso/image/upload/v1776321622/ChatGPT_Image_Apr_16_2026_12_09_26_PM_nodjzy.png",
  },
  openGraph: {
    title: "Surjeet | Professional Portfolio",
    description: "Explore the professional journey, innovative projects, and technical achievements of Surjeet.",
    url: "https://www.surjeet.in",
    siteName: "Surjeet Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/di6zndqso/image/upload/v1776464936/Screenshot_2026-04-18_at_3.58.20_AM_cwgtko.png",
        width: 1100,
        height: 800,
        alt: "Surjeet Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surjeet | Professional Portfolio",
    description: "Explore the professional journey, innovative projects, and technical achievements of Surjeet.",
    images: "https://res.cloudinary.com/di6zndqso/image/upload/v1776464936/Screenshot_2026-04-18_at_3.58.20_AM_cwgtko.png",
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
