import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Nitro",
  description: "Streamline your rental experience with our effortless booking process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
