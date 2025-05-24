import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { routes } from "./routes.ts";
import { QueryProvider } from "@/shared/providers";


createRoot(document.getElementById('root') as Element).render(
    <StrictMode>
        <QueryProvider>
            <RouterProvider router={routes}/>
        </QueryProvider>
    </StrictMode>,
)
