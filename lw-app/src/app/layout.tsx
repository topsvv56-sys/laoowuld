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
      <body className="h-full flex flex-col text-slate-800 antialiased selection:bg-[#0070ba] selection:text-white bg-slate-50">
        {children}
      </body>
    </html>
  );
}
