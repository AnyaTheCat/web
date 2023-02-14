import './globals.css'

import { ThemeWrapper } from 'src/app/context/ThemeWrapper'
import { BackgroundGrid } from 'src/app/components/BackgroundGrid'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode  
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeWrapper>
          <BackgroundGrid size={64} />
          {children}  
        </ThemeWrapper>
      </body>
    </html>
  )
}
