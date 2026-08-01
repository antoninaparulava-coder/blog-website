import "@/styles/globals.css";
import layout from "@/components/layout/logo";

export default function App({ Component, pageProps }) {
  return (
    <layout>
        <Component {...pageProps} />;
    </layout>
  )
}
