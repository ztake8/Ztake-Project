import { GlassCard } from "./glass-card"

interface MetricDisplayProps {
  value: string
  label: string
}

export function MetricDisplay({ value, label }: MetricDisplayProps) {
  return (
    <div className="animate-fadeInUp">
      <GlassCard className="p-8 text-center hover:shadow-2xl transition-all duration-500" glow hover>
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2 animate-fadeInUp">
          {value}
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </GlassCard>
    </div>
  )
}
