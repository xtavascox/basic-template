import { RouterProvider } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks'
import { MantineProvider } from '@mantine/core'
import { theme } from '../../mantine.theme.ts'
import { appLoginRouter, appRouter } from './routes.tsx'

function Navigation() {
    const [isLogged] = useLocalStorage<boolean>({
        key: 'isLogged',
        defaultValue: false,
    })

    return (
        <MantineProvider theme={theme}>
            <RouterProvider router={isLogged ? appRouter : appLoginRouter} />
        </MantineProvider>
    )
}

export default Navigation
