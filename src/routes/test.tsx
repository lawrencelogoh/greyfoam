import { createFileRoute } from '@tanstack/react-router'
import BaseCanvas from '@/components/canvas/MorphingParticles/BaseCanvas'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Helloe
      <div>
        <BaseCanvas />
      </div>
    </div>
  )
}
