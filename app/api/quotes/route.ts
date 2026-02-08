export async function GET() {
  try {
    const response = await fetch('https://zenquotes.io/api/random')

    if (!response.ok) {
      throw new Error('Failed to fetch from zenquotes.io')
    }

    const data = await response.json()
    const quote = data[0]

    return Response.json({
      text: quote.q,
      author: quote.a.replace(/^\s*-\s*/, ''),
    })
  } catch (error) {
    console.error('Quote API error:', error)
    return Response.json(
      { error: 'Unable to fetch quote' },
      { status: 500 }
    )
  }
}
