'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PaymentCardProps {
  upiPaymentString?: string
  amount?: string
  invoice?: string
}

export function PaymentCard({ 
  upiPaymentString = 'upi://pay?pa=Q428042778@ybl&pn=Ztake Payment&am=500&cu=INR&tn=Invoice&tr=INV',
  amount = '₹500',
  invoice = 'INV'
}: PaymentCardProps) {
  const [fullUpiString, setFullUpiString] = useState('')

  useEffect(() => {
    setFullUpiString(upiPaymentString)
  }, [upiPaymentString])

  const qrCodeUrl = fullUpiString 
    ? `https://api.qrserver.com/v1/create-qr-code/?size=192x192&data=${encodeURIComponent(fullUpiString)}`
    : ''

  const handlePayClick = () => {
    window.location.href = fullUpiString
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        {/* Logo & Title */}
        <div className="flex flex-col items-center space-y-3">
          <Image
            src="/ztake-logo-light.png"
            alt="Ztake Logo"
            width={48}
            height={48}
            className="h-10 w-auto sm:h-12"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Ztake Payments</h1>
        </div>

        {/* Amount Section */}
        <div className="bg-slate-50 rounded-xl p-4 sm:p-5 text-center">
          <p className="text-slate-600 text-xs font-medium uppercase tracking-wide mb-1">Amount to Pay</p>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900">{amount}</p>
        </div>

        {/* Invoice Number - Smaller Text */}
        <div className="bg-slate-50 rounded-xl p-3 sm:p-4 text-center">
          <p className="text-slate-600 text-xs font-medium uppercase tracking-wide mb-1">Invoice Number</p>
          <p className="text-xs sm:text-sm font-semibold text-slate-900">{invoice || 'INV'}</p>
        </div>

        {/* QR Code Section - Optimized for mobile */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-44 h-44 sm:w-52 sm:h-52 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-200 p-2">
            {qrCodeUrl ? (
              <img 
                src={qrCodeUrl || "/placeholder.svg"} 
                alt="UPI Payment QR Code" 
                className="w-full h-full"
              />
            ) : (
              <div className="text-slate-400 text-xs">Generating QR Code...</div>
            )}
          </div>
          <p className="text-xs text-slate-600 text-center px-2">Scan the QR with any UPI app to complete your payment</p>
        </div>

        {/* Pay Button */}
        <button 
          onClick={handlePayClick}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg sm:rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
        >
          Pay Using UPI App
        </button>

        {/* Security Footer */}
        <div className="text-center">
          <p className="text-xs text-slate-500">🔒 Secured with end-to-end encryption</p>
        </div>
      </div>
    </div>
  )
}
