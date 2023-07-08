import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex h-full grow flex-col">
        <div className="flex grow flex-col">{children}</div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  )
}
