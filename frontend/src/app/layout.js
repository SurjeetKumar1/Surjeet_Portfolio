import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Abhinav Jaiswal | Software Developer",
  description: "Personal portfolio of Abhinav Jaiswal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="max-w-[1200px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8 min-h-screen">
          <Sidebar />
          <div className="flex-1">
            {children}
          </div>
        </main>
        <footer className="text-center py-8 text-white/40 text-sm border-t border-white/5 mt-auto">
          © 2026 Abhinav Jaiswal | All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
