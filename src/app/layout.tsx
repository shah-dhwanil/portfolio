import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getProfile } from "@/lib/content";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const profile = getProfile();
  return {
    title: profile.name,
    description: `${profile.title} — Personal Portfolio`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = getProfile();

  return (
    <html lang="en" className={`${poppins.variable} dark h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground font-sans">
        <main
          className="my-[15px] mx-3 mb-[75px] min-w-[259px]
          sm:mt-[60px] sm:mb-[100px] sm:w-[520px] sm:mx-auto sm:p-0
          md:w-[700px]
          lg:w-[950px]
          xl:max-w-[1200px] xl:flex xl:justify-center xl:items-stretch xl:gap-[25px] xl:mb-[60px] xl:w-auto"
        >
          <div
            className="xl:sticky xl:top-[60px] xl:self-start xl:max-h-max xl:w-[25%] xl:min-w-[25%]"
          >
            <Sidebar profile={profile} />
          </div>
          <div className="flex-1 xl:min-w-[75%] xl:w-[75%]">
            <Navbar />
            <article
              className="bg-card border border-border rounded-[20px] p-[15px] shadow-lg
              sm:p-[30px] sm:w-full"
            >
              {children}
            </article>
          </div>
        </main>
      </body>
    </html>
  );
}
