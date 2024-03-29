import React from 'react'
import ReactDOM from 'react-dom/client'

import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
    <QueryClientProvider client={queryClient}>

      <main className="dark text-foreground bg-background">
        <RouterProvider router={ router } />
        <ReactQueryDevtools  />
      </main>
    </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
