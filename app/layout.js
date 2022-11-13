import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>Amazon Clone 1.0</title>
      </head>
      <body>
        <Header />
        <div className="w-full md:pl-14 py-5 flex">
          <Sidebar />
          <div className="w-full h-[88vh] overflow-y-auto px-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
