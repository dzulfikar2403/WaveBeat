import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400","800"]
})

export const metadata: Metadata = {
  title: "WaveBeat.",
  description: "\"WaveBeat\" adalah aplikasi musik mobile inovatif yang dirancang untuk memberikan pengalaman mendengarkan musik yang lebih personal. Dikembangkan sebagai proyek pribadi, WaveBeat menyuguhkan antarmuka intuitif dan fitur pemutar musik yang canggih, memastikan Anda dapat menemukan, memutar, dan mengatur koleksi lagu favorit dengan mudah. Dapatkan pengalaman audio yang menyenangkan dan sesuaikan playlist Anda sesuai suasana hati. WaveBeat—alunan musik di genggaman Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
