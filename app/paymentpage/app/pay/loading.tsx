export default function PayLoading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-48 h-48 bg-slate-200 rounded-2xl" />
        <div className="w-32 h-6 bg-slate-200 rounded" />
        <div className="w-40 h-4 bg-slate-200 rounded" />
      </div>
    </main>
  )
}
