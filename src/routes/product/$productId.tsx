import { Link, createFileRoute } from '@tanstack/react-router'
import { products } from '@/lib/products'

export const Route = createFileRoute('/product/$productId')({
  component: ProductPage,
})

function ProductPage() {
  const { productId } = Route.useParams()
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-2 text-slate-600">We couldn't find that product. Please go back and try again.</p>
        <div className="mt-6">
          <Link to="/" className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{product.name}</h1>
          <p className="mt-2 text-slate-600">{product.blurb}</p>
          <div className="mt-4 text-xl font-semibold">{product.price}</div>

          {/* Configurator scaffolding */}
          <div className="mt-8 space-y-6">
            {product.optionGroups.map((group) => (
              <div key={group.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-slate-900">{group.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={
                        group.type === 'swatch'
                          ? 'h-9 w-9 rounded-full border border-slate-300 bg-slate-50 text-[0] hover:ring-2 hover:ring-slate-300'
                          : 'rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50'
                      }
                      title={`${group.name}: ${opt.label}`}
                      aria-label={`${group.name}: ${opt.label}`}
                    >
                      {group.type === 'swatch' ? '' : opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Add to cart
            </button>
            <Link
              to="/"
              hash="products"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
