import Link from 'next/link'

export const revalidate = 60

export const generateStaticParams = () => []

export default function Page() {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)

  return (
    <main style={{ padding: 20 }}>
      <h1>Middleware Rewrite + scroll=false Bug</h1>
      <p>
        Middleware rewrites <code>/</code> → <code>/en/r/123</code>.
        Scroll down and click a link. The page scrolls to top despite{' '}
        <code>scroll=false</code>.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
        {items.map((item, i) => (
          <Link
            key={i}
            href={`?item=${i}`}
            prefetch={false}
            scroll={false}
            style={{
              padding: 16,
              border: '1px solid #ccc',
              borderRadius: 8,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {item} — click to set ?item={i}
          </Link>
        ))}
      </div>
    </main>
  )
}
