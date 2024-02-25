import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, { Suspense } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import { LayoutApp } from './app/views'

const Login = React.lazy(() =>
    import('./app/views/login/Login.tsx').then((module) => ({ default: module.Login })),
)

const Home = React.lazy(() =>
    import('./app/views/app/Home.tsx').then((module) => ({ default: module.Home })),
)
const StudentHome = React.lazy(() =>
    import('./app/views/app/StudentHome.tsx').then((module) => ({ default: module.StudentHome })),
)

const appRouter = createBrowserRouter([
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
                path: '/contact',
                element: (
                    <div>
                        <h1>Contact</h1>
                    </div>
                ),
            },
        ],
    },
])

const appLoginRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Login />
            </Suspense>
        ),
    },
])
function Navigation() {
    const [isLogged] = useLocalStorage<boolean>({
        key: 'isLogged',
        defaultValue: false,
    })

    return <RouterProvider router={isLogged ? appRouter : appLoginRouter} />
}

export default Navigation
