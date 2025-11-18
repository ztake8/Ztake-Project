'use client'

import { useSearchParams } from 'next/navigation'
import { PaymentCard } from '@/components/payment-card'

export function PaymentPageContent() {
  const searchParams = useSearchParams()
  
  const amount = searchParams.get('amount') || '500'
  const invoice = searchParams.get('invoice') || ''
  
  // Generate UPI payment string
  const upiString = `upi://pay?pa=Q428042778@ybl&pn=Ztake Payment&am=${amount}&cu=INR&tn=Invoice ${invoice}&tr=${invoice}`

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4 py-8">
      <PaymentCard 
        upiPaymentString={upiString}
        amount={`₹${amount}`}
        invoice={invoice}
      />
    </main>
  )
}
