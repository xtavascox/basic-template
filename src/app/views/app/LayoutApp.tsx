import { Button, Menu } from '../../components'
import { MenuItemProps } from '../../components/schemas/menu.schema.ts'
import { FaCircleUser, FaHouseChimney, FaPhone } from 'react-icons/fa6'
import { Outlet } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks'

export const LayoutApp = () => {
    const [isLogged, setIsLogged] = useLocalStorage<boolean>({
        key: 'isLogged',
        defaultValue: false,
    })

    const handleLogout = () => {
        setIsLogged(!isLogged)
    }

    return (
        <div className='flex min-h-screen'>
            <aside className={`w-1/6`}>
                <Menu
                    Items={menuItems}
                    title='Menu'
                    link='/'
                />
            </aside>
            <div className='flex flex-col w-full'>
                <header className='flex h-14 justify-end items-center border-b shrink-0 px-4 '>
                    <div className='flex  items-center space-x-2'>
                        <Button
                            text='Logout'
                            onClick={handleLogout}
                        />
                    </div>
                </header>
                <main className='flex-1 w-full'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

const menuItems: MenuItemProps[] = [
    {
        label: 'Home',
        link: '/',
        Icon: FaHouseChimney,
    },
    {
        label: 'Students',
        link: '/student',
        Icon: FaCircleUser,
    },
    {
        label: 'Contact',
        link: '/contact',
        Icon: FaPhone,
    },
]
