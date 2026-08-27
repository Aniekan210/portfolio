import localFont from "next/font/local";

export const mattone = localFont({
  src: [
    {
      path: "../public/fonts/Mattone-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mattone-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Mattone-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mattone",
  display: "swap",
});
