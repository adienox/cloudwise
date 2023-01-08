import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.className} grid h-[100vh] w-full items-center justify-center`}
    >
      <Component {...pageProps} />
    </main>
  );
}
