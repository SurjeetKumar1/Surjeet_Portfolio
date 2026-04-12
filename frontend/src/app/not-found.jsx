"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="not-found-page">
            <style>{`
                .not-found-page {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100vw;
                  height: 100vh;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  background-color: #fff;
                  padding: 2rem;
                  font-family: sans-serif;
                  z-index: 9999;
                }
                .msg-container {
                  text-align: center;
                  margin-top: 2rem;
                }
                h1 { font-size: 3rem; color: #2F1829; margin: 0; }
                p { font-size: 1.2rem; color: #666; }
                .home-link {
                  margin-top: 1.5rem;
                  display: inline-block;
                  padding: 0.75rem 1.5rem;
                  background-color: #2F1829;
                  color: #fff;
                  border-radius: 8px;
                  text-decoration: none;
                  transition: opacity 0.2s;
                }
                .home-link:hover { opacity: 0.9; }
            `}</style>
            
            <div style={{ width: "100%", maxWidth: 600 }}>
                <Link href="/" aria-label="Go back to homepage">
                    <motion.svg
                        animate={{ y: [0, 20, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        width="100%"
                        height="auto"
                        viewBox="0 0 636 324"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="OBJECTS">
                            <path d="M101.3 255.2C101.3 255.2 111.1 272.6 181.8 280.5C252.5 288.4 288.2 314.9 333.1 322.8C378 330.7 433.6 278.5 481.8 286.5C530 294.4 588.2 264.2 592.8 255.2H101.3Z" fill="#2F1829" />
                            {/* Simplified 404 text blocks */}
                            <path d="M237.3 191.1V97.5H201.8V97.8L159 166.6L140.3 196.7L142.4 218.4H201.8V251H237.3V218.4H253V191H237.3V191.1ZM201.8 191.1H174.2L199.6 147.4L201.8 143.8V191.1Z" fill="#2F1829" />
                            <motion.g animate={{ x: [0, 10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                <path d="M361.2 110.3C351.9 99 338.7 93.3 321.6 93.3C304.6 93.3 291.4 98.9 282.1 110.2C272.8 121.5 268.1 137.4 268.1 158.2V186.3C268.1 206.9 272.8 222.9 282.1 234.2C291.5 245.5 304.7 251.2 321.8 251.2C338.7 251.2 351.9 245.6 361.2 234.3C370.5 223 375.2 207.1 375.2 186.3V158.3C375.2 137.6 370.5 121.6 361.2 110.3Z" fill="#2F1829" />
                            </motion.g>
                            <path d="M487.5 191.1V97.5H452V97.8L390.5 196.7L392.6 218.4H452V251H487.5V218.4H503.1V191H487.5V191.1ZM452 191.1H424.4L449.8 147.4L452 143.8V191.1V191.1Z" fill="#2F1829" />
                        </g>
                    </motion.svg>
                </Link>
            </div>

            <div className="msg-container">
                <h1>Oops! Page Not Found</h1>
                <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
                <Link href="/" className="home-link">Back to Homepage</Link>
            </div>
        </div>
    );
}
