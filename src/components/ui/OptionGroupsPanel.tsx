import type { Product } from '@/lib/products'
import { usePillowStore } from '@/stores/usePillowStore'

function UploadOption() {
  const image = usePillowStore((s) => s.image)
  const setImage = usePillowStore((s) => s.setImage)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Option 1: Fast preview with object URL
    // const url = URL.createObjectURL(file)
    // setImage(url)


    const reader = new FileReader()
    reader.onload = () => setImage(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium bg-white hover:bg-slate-50 cursor-pointer">
        Upload Image
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>

      {image && (
        <div className="mt-2">
          <img src={image} alt="Preview" className="h-16 w-16 rounded object-cover border" />
          <button
            type="button"
            onClick={() => setImage("")}
            className="mt-1 text-xs text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}


export function OptionGroupsPanel({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-lg backdrop-blur">
      <h1 className="text-lg font-semibold text-slate-900">{product.name}</h1>
      <p className="mt-1 text-sm text-slate-600">{product.blurb}</p>
      <div className="mt-2 text-base font-semibold">{product.price}</div>

      <div className="mt-6 space-y-5">
        {product.optionGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              {group.name}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">


	      {group.type === 'upload' ? (
		<UploadOption group={group} />
	      ) : (
		group.options.map((opt) => {
		  const color = usePillowStore((s) => s.color)
		  const material = usePillowStore((s) => s.material)
		  const setColor = usePillowStore((s) => s.setColor)
		  const setMaterial = usePillowStore((s) => s.setMaterial)

		  const isSelected =
		    group.name === 'Cover Color'
		      ? color === opt.value
		      : group.name === 'Material'
		      ? material === opt.value
		      : false

		  const handleClick = () => {
		    if (group.name === 'Cover Color') setColor(opt.value)
		    if (group.name === 'Material') setMaterial(opt.value as any)
		  }

		  return (
		    <button
		      key={opt.value}
		      type="button"
		      onClick={handleClick}
		      className={
			group.type === 'swatch'
			  ? `h-8 w-8 rounded-full border ${
			    isSelected
			      ? 'border-slate-900 ring-2 ring-slate-900'
			      : 'border-slate-300 hover:ring-2 hover:ring-slate-300'
			} text-[0]`
			  : `rounded-full border px-3 py-1.5 text-xs font-medium ${
			    isSelected
			      ? 'bg-slate-900 text-white border-slate-900'
			      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
			}`
		      }
		      style={group.type === 'swatch' ? { backgroundColor: opt.value } : {}}
		    >
		      {group.type === 'swatch' ? '' : opt.label}
		    </button>
		  )
		})
	      )}


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
