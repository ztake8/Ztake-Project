import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"
import { Globe, DollarSign, Zap, Shield, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function InternationalPayments() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Global Payment
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Gateway
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Accept international payments in over 100+ currencies from all major international cards
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Simplify global transactions and expand your reach worldwide, effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PillButton variant="default" size="lg" href="/contact">
              Get Started
            </PillButton>
            <PillButton variant="outline" size="lg" href="/contact">
              Contact Sales
            </PillButton>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Currencies Supported</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Countries Supported</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">T+2</div>
              <p className="text-muted-foreground">Settlement Cycle</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accept payments globally with Ztake's International Payment Gateway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Globe}
              title="Global Card Acceptance"
              description="Accept payments seamlessly globally from any Visa, Mastercard, Maestro, and Amex cards"
              features={[
                "3DS 2.0 authentication",
                "Secure global transactions",
                "Multi-card support",
                "Instant verification",
              ]}
            />
            <FeatureCard
              icon={DollarSign}
              title="100+ Currencies"
              description="Support for major currencies across the globe"
              features={[
                "USD, EUR, GBP, JPY",
                "Asian currencies",
                "Emerging market support",
                "Real-time rates",
              ]}
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Address Verification"
              description="Boost transaction success rates for USA and Canada with AVS"
              features={[
                "AVS integration",
                "Higher approval rates",
                "Fraud prevention",
                "Automatic validation",
              ]}
            />
            <FeatureCard
              icon={Zap}
              title="Frictionless Checkout"
              description="Experience smooth authentication checkout for international transactions"
              features={[
                "Quick checkout flow",
                "Minimal friction",
                "Mobile optimized",
                "One-click payments",
              ]}
            />
            <FeatureCard
              icon={Shield}
              title="FIRC Compliance"
              description="Ensure hassle-free international shipping controls"
              features={[
                "Monthly FIRC reports",
                "Tax compliance",
                "Export documentation",
                "Regulatory support",
              ]}
            />
            <FeatureCard
              icon={TrendingUp}
              title="High Success Rates"
              description="Achieve over 75% higher success rate on secure transactions"
              features={[
                "Advanced routing",
                "Smart retries",
                "Conversion optimization",
                "Risk management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Suitable for All Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accept international payments and expand your reach worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
              <p className="text-muted-foreground mb-6">
                Expand your online business globally by meeting the international demand for your products. Transcend borders and facilitate seamless transactions worldwide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Global market access</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Multi-currency pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Cross-border transactions</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-4">Travel & Hospitality</h3>
              <p className="text-muted-foreground mb-6">
                Enable seamless booking and payment experiences for international travelers with instant currency conversion and settlement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Booking integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Instant settlements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>24/7 support</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-4">SaaS & Software</h3>
              <p className="text-muted-foreground mb-6">
                Collect recurring payments from international customers with flexible billing and subscription management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Recurring billing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Subscription management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Flexible billing cycles</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-4">Digital Services</h3>
              <p className="text-muted-foreground mb-6">
                Accept payments from customers worldwide for digital products, courses, and services with automatic delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Instant delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Automated workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Global reach</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lowest International Payment Charges</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No setup, maintenance, or hidden fees. Pay only for actual transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <GlassCard className="p-8 text-center" glow>
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">Visa & Mastercard</span>
              </div>
              <div className="text-4xl font-bold mb-4">2.99%</div>
              <p className="text-muted-foreground">Per transaction</p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">PayPal</span>
              </div>
              <div className="text-4xl font-bold mb-4">Varies</div>
              <p className="text-muted-foreground">Standard payment gateway rates</p>
            </GlassCard>

            <GlassCard className="p-8 text-center" glow>
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">American Express</span>
              </div>
              <div className="text-4xl font-bold mb-4">2.95%</div>
              <p className="text-muted-foreground">Per transaction</p>
            </GlassCard>
          </div>

          <GlassCard className="p-8" glow>
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Custom pricing designed for enterprises with dedicated account manager, early access to features, and discounted rates.
            </p>
            <PillButton variant="default" href="/contact">Contact Sales</PillButton>
          </GlassCard>
        </div>
      </section>

      {/* Currencies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Supported Currencies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accept payments in 100+ currencies and receive settlement in INR
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SGD", "HKD", "INR", "MYR"].map((currency) => (
              <GlassCard key={currency} className="p-4 text-center" glow>
                <p className="font-semibold">{currency}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center" glow>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Accept International Payments?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start expanding your business globally today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PillButton variant="default" size="lg" href="/contact">
                Get Started
              </PillButton>
              <PillButton variant="outline" size="lg" href="/docs">
                View Documentation
              </PillButton>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}
