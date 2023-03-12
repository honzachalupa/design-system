import type { AppProps } from "next/app";
import "ui/tailwind-globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
