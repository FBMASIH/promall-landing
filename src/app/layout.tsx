import "../style/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
        <title>پرومال</title>
        <link rel="shortcut icon" href="./icon.png" type="image/x-icon" />
      </head>
      <body className="bg-white dark:bg-gradient font-yekanbakh no-scrollbar">
        {children}
      </body>
    </html>
  );
}
