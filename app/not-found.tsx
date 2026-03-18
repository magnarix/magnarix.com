import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="bg-midnight grid-bg min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <div className="max-w-lg mx-auto">
          <div className="text-steel text-8xl font-bold tracking-tightest mb-6 leading-none">
            404
          </div>
          <h1 className="heading-lg mb-4">Page not found</h1>
          <p className="body-lg text-frost mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/">Return Home</Button>
            <Button href="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
