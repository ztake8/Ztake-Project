import { PaymentCard } from '@/components/payment-card'

export const metadata = {
  title: 'Ztake Payments',
  description: 'Complete your payment securely with Ztake',
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 py-8">
      <PaymentCard />
    </main>
  )
}
