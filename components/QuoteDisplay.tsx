interface QuoteDisplayProps {
  quote: {
    text: string
    author: string
  }
}

export default function QuoteDisplay({ quote }: QuoteDisplayProps) {
  return (
    <div className="space-y-6 py-12">
      <div className="relative">
        <div className="absolute -top-8 -left-2 text-6xl text-accent opacity-30">
          "
        </div>
        <blockquote className="text-2xl md:text-4xl font-light text-foreground leading-relaxed">
          {quote.text}
        </blockquote>
      </div>
      <footer className="text-lg text-muted-foreground">
        — {quote.author}
      </footer>
    </div>
  )
}
