import { Link, createFileRoute } from '@tanstack/react-router'
import { products } from '@/lib/products'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://source.unsplash.com/random/1600x800?minimal,interior"
            alt="Soft interior background"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-20 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            New: Fall Comfort Collection
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sleep on Cloud Nine with Greyfoam
          </h1>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Premium foam essentials designed for deeper rest and brighter mornings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#products"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:opacity-90"
            >
              Shop Products
            </a>
            <a
              href="#why"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Why Greyfoam
            </a>
          </div>
        </div>
      </section>

      {/* Blurbs / Why */}
      <section id="why" className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Breathable by Design</h3>
          <p className="mt-2 text-sm text-slate-600">
            Multi-layer airflow channels keep you cool while you drift into deeper stages of sleep.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Cloud-Soft Comfort</h3>
          <p className="mt-2 text-sm text-slate-600">
            Responsive, supportive foam cushions pressure points so you wake up refreshed.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Sustainable Materials</h3>
          <p className="mt-2 text-sm text-slate-600">
            Thoughtfully sourced fabrics and fills for comfort you can feel good about.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            View all
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.blurb}</p>
                {/* Quick glance option badges (first two groups) */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {p.optionGroups.slice(0, 2).map((g) => (
                    <span
                      key={`${p.id}-${g.name}`}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700"
                      title={`${g.name}: ${g.options.map((o) => o.label).join(', ')}`}
                    >
                      {g.name}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{p.price}</span>
                  <Link
                    to="/product/$productId"
                    params={{ productId: p.id }}
                    className="inline-flex items-center rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    aria-label={`Customize ${p.name}`}
                  >
                    Customize
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="my-16 overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold">Build your better bedtime</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
          Mix and match pillows, sheets, and toppers to create your ideal sleep setup. Free shipping over $100.
        </p>
        <div className="mt-6">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Explore the collection
          </a>
        </div>
      </section>
    </main>
  )
}
