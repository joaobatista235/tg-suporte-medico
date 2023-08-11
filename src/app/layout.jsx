import '../styles/globals.scss'

export const metadata = {
  title: 'Site de medico',
  description: 'Generado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
