import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Next app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </head>
      <body>
        <Navigation/>
        <div class="container p-4">
          {children}
        </div>
      </body>
    </html>
  )
}
