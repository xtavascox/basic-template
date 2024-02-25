import { AppShell, Burger } from '@mantine/core'
import { useDisclosure, useLocalStorage } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'
import { HeaderLayout } from './HeaderLayout.tsx'
import { NavbarLayout } from './NavbarLayout.tsx'
// import { MenuItemProps } from '../../components/schemas/menu.schema.ts'
// import { FaCircleUser, FaHouseChimney, FaPhone } from 'react-icons/fa6'

export const LayoutApp = () => {
    const [opened, { toggle }] = useDisclosure()
    const [, setIsLogged] = useLocalStorage<boolean>({
        key: 'isLogged',
        defaultValue: false,
    })
    console.log(setIsLogged)
    // const handleLogout = () => {
    //     setIsLogged(false)
    // }
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding='md'
        >
            <AppShell.Header>
                <HeaderLayout>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom='sm'
                        size='sm'
                    />
                </HeaderLayout>
            </AppShell.Header>
            <AppShell.Navbar p='md'>
                <NavbarLayout />
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}
