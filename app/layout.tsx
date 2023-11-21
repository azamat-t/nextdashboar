import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>OneSignal + Next.js</title>
        <meta
          name="description"
          content="Integrating OneSignal with a Next.js app."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </head>

      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
