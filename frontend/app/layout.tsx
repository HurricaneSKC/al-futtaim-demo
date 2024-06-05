import "regenerator-runtime/runtime.js";
import "./globals.css";
import { DataProvider } from "./context/dataContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <div className="artboard artboard-demo phone-3 relative overflow-hidden">
          <DataProvider>{children}</DataProvider>
        </div>
      </body>
    </html>
  );
}
