'use client'

import { useState, useEffect } from 'react'
import QuoteDisplay from '@/components/QuoteDisplay'
import QuoteButton from '@/components/QuoteButton'

interface Quote {
  text: string
  author: string
}

export default function Page() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuote = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://api.quotable.io/random')
      if (!response.ok) throw new Error('Failed to fetch quote')
      const data = await response.json()
      setQuote({
        text: data.content,
        author: data.author,
      })
    } catch (err) {
      setError('Unable to load quote. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-pretty">
              Quote of the Day
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Find daily inspiration
            </p>
          </div>

          {isLoading && !quote ? (
            <div className="py-16">
              <div className="inline-block animate-pulse">
                <div className="w-12 h-12 bg-accent rounded-full" />
              </div>
            </div>
          ) : error ? (
            <div className="bg-secondary rounded-lg p-6 text-destructive">
              {error}
            </div>
          ) : quote ? (
            <QuoteDisplay quote={quote} />
          ) : null}

          <QuoteButton onClick={fetchQuote} isLoading={isLoading} />
        </div>
      </div>
    </main>
  )
}
