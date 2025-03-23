import Link from "next/link"
import { ArrowRight, Calendar, Clock, Home, MessageSquare, Phone, Shield, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LavooLogo } from "@/components/lavoo-logo"
import { AppPreview } from "@/components/app-preview"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LavooLogo className="h-8 w-8" />
            <span className="text-xl font-bold">Lavoo</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Introducing Lavoo
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Simplify Laundry Room <span className="text-primary">Booking</span> for Swiss Apartments
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Lavoo helps property managers streamline laundry room scheduling with our intuitive mobile and web booking
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <AppPreview />
          </div>
        </section>

        <section id="features" className="container py-24 space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Everything You Need for Efficient Laundry Management
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our platform is designed specifically for Swiss apartment buildings with shared laundry facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg">
              <div className="rounded-full bg-primary/10 p-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Simple Booking</h3>
              <p className="text-muted-foreground">
                Residents can easily book laundry slots through our intuitive mobile or web app.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg">
              <div className="rounded-full bg-primary/10 p-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Automated Scheduling</h3>
              <p className="text-muted-foreground">
                Set recurring schedules or customize time slots based on your building's needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg">
              <div className="rounded-full bg-primary/10 p-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Notifications</h3>
              <p className="text-muted-foreground">
                Automatic reminders for upcoming bookings and notifications when laundry is complete.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg">
              <div className="rounded-full bg-primary/10 p-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Multi-Property Support</h3>
              <p className="text-muted-foreground">
                Manage multiple buildings and laundry rooms from a single dashboard.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg">
              <div className="rounded-full bg-primary/10 p-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure Access</h3>
              <p className="text-muted-foreground">
                Role-based permissions for property managers, maintenance staff, and residents.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg">
              <div className="rounded-full bg-primary/10 p-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Mobile Friendly</h3>
              <p className="text-muted-foreground">
                Native mobile apps for iOS and Android with a responsive web interface.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-muted py-24">
          <div className="container space-y-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Simple Implementation, Powerful Results
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Getting started with Lavoo is easy and can be set up in just a few steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Consultation</h3>
                    <p className="text-muted-foreground">
                      We'll discuss your specific needs and customize the platform for your properties.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Setup</h3>
                    <p className="text-muted-foreground">
                      Our team configures the system with your building information and resident data.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Training</h3>
                    <p className="text-muted-foreground">
                      We provide training for property managers and create materials for residents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Launch</h3>
                    <p className="text-muted-foreground">
                      Residents download the app and start booking laundry slots immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border bg-background">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Lavoo dashboard interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="container py-24 space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple, Transparent Pricing</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Choose the plan that works best for your property management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 border rounded-lg bg-background">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-muted-foreground">For small apartment buildings</p>
              </div>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">CHF 99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Up to 20 apartments</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>1 laundry room</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Mobile & web apps</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
            <div className="flex flex-col p-6 border rounded-lg bg-background relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Standard</h3>
                <p className="text-muted-foreground">For medium-sized properties</p>
              </div>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">CHF 199</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Up to 50 apartments</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Up to 3 laundry rooms</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Mobile & web apps</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Analytics dashboard</span>
                </li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </div>
            <div className="flex flex-col p-6 border rounded-lg bg-background">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-muted-foreground">For large property portfolios</p>
              </div>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Unlimited apartments</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Unlimited laundry rooms</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Mobile & web apps</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-primary"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Ready to Simplify Laundry Management?
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Get in touch with our team to schedule a demo and learn how Lavoo can help your property.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@lavoo.ch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+41 XX XXX XX XX</span>
                  </div>
                </div>
              </div>
              <div className="bg-background p-8 rounded-lg border">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <LavooLogo className="h-8 w-8" />
                <span className="text-xl font-bold">Lavoo</span>
              </div>
              <p className="text-muted-foreground">Simplifying laundry room booking for Swiss apartments.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Lavoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

