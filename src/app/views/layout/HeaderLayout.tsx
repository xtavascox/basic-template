import { Avatar, Group, Text, Menu } from '@mantine/core'
import { useState } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

export const HeaderLayout = ({ children }: { children: any }) => {
    const [opened, setOpened] = useState(false)
    const [, setLogged] = useLocalStorage({
        key: 'isLogged',
        defaultValue: false,
    })
    const navigate = useNavigate()
    const handleLogout = () => {
        setLogged(false)
        navigate('/')
    }
    return (
        <div className='h-full bg-coral-red-500 py-2 px-4'>
            <Group
                justify='space-between'
                align='center'
            >
                <Text>Header</Text>
                <Group>
                    {children}
                    <Menu
                        opened={opened}
                        onChange={setOpened}
                    >
                        <Menu.Target>
                            <Avatar
                                autoContrast
                                className='bg-silver-700 bg-opacity-70'
                            >
                                <Text style={{ color: 'whitesmoke' }}>GF</Text>
                            </Avatar>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>Profile</Menu.Item>
                            <Menu.Item>Settings</Menu.Item>
                            <Menu.Divider />
                            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Group>
        </div>
    )
}
