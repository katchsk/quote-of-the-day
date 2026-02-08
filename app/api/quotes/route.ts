export async function GET() {
  try {
    const response = await fetch('https://api.quotable.io/random', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch from quotable.io')
    }

    const data = await response.json()

    return Response.json({
      text: data.content,
      author: data.author,
    })
  } catch (error) {
    console.error('Quote API error:', error)
    return Response.json(
      { error: 'Unable to fetch quote' },
      { status: 500 }
    )
  }
}
