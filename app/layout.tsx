import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { connectDB } from "@/lib/database";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "User Management App",
  description: "A simple user management application with frontend and backend",
};

// Connect to database on app startup
if (process.env.NODE_ENV !== 'production') {
  connectDB();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
