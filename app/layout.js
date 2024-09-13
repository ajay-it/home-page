import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home Page",
  description: "Created in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-white text-gray-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
