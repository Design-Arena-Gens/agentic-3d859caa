import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MegaOferta Express - Preço baixo, compra rápida e entrega garantida!',
  description: 'Ofertas imperdíveis com até 60% OFF. Eletrônicos, acessórios, moda e muito mais!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
