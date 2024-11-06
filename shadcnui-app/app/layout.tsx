import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Morales Portfolio",
  description: "Eduardo Morales'es Portfolio with shadcnUi and TypeScript",
};

export default function RootLayout({ children, }: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
