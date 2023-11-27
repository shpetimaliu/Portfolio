import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: "Shpetim Aliu",
  description: "MERN Stack developer",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
