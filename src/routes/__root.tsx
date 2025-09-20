import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import { Header } from '@/components/Header'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import StoreDevtools from '../lib/demo-store-devtools'

import appCss from '@/styles/globals.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <footer className="mt-16 border-t border-slate-200/70 bg-white/80">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-600 sm:px-6 lg:px-8">
            Built by{' '}
            <a
              href="https://lawrencelogoh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-800 underline-offset-2 hover:underline"
            >
              Lawrence Logoh
            </a>
          </div>
        </footer>
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
            StoreDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
