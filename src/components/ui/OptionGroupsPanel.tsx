import type { Product } from '@/lib/products'

export function OptionGroupsPanel({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-lg backdrop-blur">
      <h1 className="text-lg font-semibold text-slate-900">{product.name}</h1>
      <p className="mt-1 text-sm text-slate-600">{product.blurb}</p>
      <div className="mt-2 text-base font-semibold">{product.price}</div>

      <div className="mt-6 space-y-5">
        {product.optionGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-700">{group.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={
                    group.type === 'swatch'
                      ? 'h-8 w-8 rounded-full border border-slate-300 bg-slate-50 text-[0] hover:ring-2 hover:ring-slate-300'
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

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Add to cart
        </button>
      </div>
    </div>
  )
}
