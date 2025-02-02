import "./globals.css";

export const metadata = {
  title: "Devscribe",
  description: "AI Assisted Documentation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
