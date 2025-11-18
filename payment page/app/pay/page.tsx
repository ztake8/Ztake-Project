import { Suspense } from 'react'
import PayLoading from './loading'
import { PaymentPageContent } from '@/components/payment-page-content'

export default function PayPage() {
  return (
    <Suspense fallback={<PayLoading />}>
      <PaymentPageContent />
    </Suspense>
  )
}
