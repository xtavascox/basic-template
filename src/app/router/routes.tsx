import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LayoutApp } from '../views'

const Login = lazy(() => import('../views').then((module) => ({ default: module.Login })))
const Home = lazy(() => import('../views').then((module) => ({ default: module.Home })))
const StudentHome = lazy(() =>
    import('../views').then((module) => ({ default: module.StudentHome })),
)

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <LayoutApp />
            </Suspense>
        ),
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: '/student',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <StudentHome />
                    </Suspense>
                ),
            },
            {
                path: '/courses',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
        ],
    },
])
export const appLoginRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        ),
    },
])
