import { geistSans, geistMono, inter } from "@/app/ui/fonts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/app/ui/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <AntdRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
