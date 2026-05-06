import { geistSans, geistMono, inter } from "@/app/ui/fonts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/app/ui/ThemeProvider";
import AuthProvider from "@/app/ui/AuthProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <AntdRegistry>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

