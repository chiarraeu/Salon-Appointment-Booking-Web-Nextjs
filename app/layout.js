import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Book Now",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="md:px-20">
          <Header/>
          {children}
          
          <Toaster />
        </div>
<<<<<<< HEAD
        <Footer/> 
=======
         <Footer/> 
          <SpeedInsights/>
>>>>>>> 420c89f7e65cbda6b66c904f87d0deadcaae927c
        </body>
    </html>
  );
}
