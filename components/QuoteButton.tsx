'use client';

import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

interface QuoteButtonProps {
  onClick: () => void
  isLoading: boolean
}

export default function QuoteButton({ onClick, isLoading }: QuoteButtonProps) {
  return (
    <div className="flex justify-center pt-8">
      <Button
        onClick={onClick}
        disabled={isLoading}
        className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 h-auto text-base font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
      >
        <RefreshCw
          size={20}
          className={isLoading ? 'animate-spin' : ''}
        />
        New Quote
      </Button>
    </div>
  )
}
