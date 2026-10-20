import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lao World Public Company - ເວັບໄຊຮັບສະໝັກວຽກ (Careers Portal)",
  description: "ເວັບໄຊຮັບສະໝັກວຽກ ບໍລິສັດ ລາວເວີລ ມະຫາຊົນ - Lao World Public Company Careers Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo" className="h-full bg-slate-50">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Lao:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full flex flex-col text-slate-800 antialiased selection:bg-[#0070ba] selection:text-white bg-slate-50">
        {children}
      </body>
    </html>
  );
}
