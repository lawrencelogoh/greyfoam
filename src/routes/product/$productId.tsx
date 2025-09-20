import { Link, createFileRoute } from '@tanstack/react-router'
import { products } from '@/lib/products'
import { OptionGroupsPanel } from '@/components/ui/OptionGroupsPanel'
import { BaseCanvas as NimbusFoamPillowCanvas } from '@/components/canvas/NimbusFoamPillow/BaseCanvas'
import { BaseCanvas as StratusMattressTopperCanvas } from '@/components/canvas/StratusMattressTopper/BaseCanvas'
import { BaseCanvas as CumulusPlatformBedCanvas } from '@/components/canvas/CumulusPlatformBed/BaseCanvas'
import { BaseCanvas as CumulusSheetSetCanvas } from '@/components/canvas/CumulusSheetSet/BaseCanvas'
import { BaseCanvas as ZephyrDuvetInsertCanvas } from '@/components/canvas/ZephyrDuvetInsert/BaseCanvas'
import { BaseCanvas as StratusStorageCabinetCanvas } from '@/components/canvas/StratusStorageCabinet/BaseCanvas'

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

  const Canvas = getCanvasForProduct(product.id)

  return (
    <div>
      {/* Fullscreen Canvas Background */}
      <Canvas />

      {/* Floating Sidebar - vertically centered */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-10 w-[min(420px,90vw)]">
        <OptionGroupsPanel product={product} />
        <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
          <span>
            <Link to="/" className="hover:underline">
              ← Back
            </Link>
          </span>
          <Link to="/" hash="products" className="hover:underline">
            Continue shopping
          </Link>
        </div>
      </aside>
    </div>
  )
}

function getCanvasForProduct(productId: string) {
  switch (productId) {
    case 'p1':
      return NimbusFoamPillowCanvas
    case 'p2':
      return StratusMattressTopperCanvas
    case 'p3':
      return CumulusPlatformBedCanvas
    case 'p4':
      return CumulusSheetSetCanvas
    case 'p5':
      return ZephyrDuvetInsertCanvas
    case 'p6':
      return StratusStorageCabinetCanvas
    default:
      return NimbusFoamPillowCanvas
  }
}
