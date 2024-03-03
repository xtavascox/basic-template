import { NavLink, Text } from '@mantine/core'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { useState } from 'react'

const NavbarItems: { label: string; to: string }[] = [
    { label: 'Home', to: '/' },
    { label: 'Students', to: '/student' },
    { label: 'Courses', to: '/courses' },
]

export const NavbarLayout = () => {
    const [active, setActive] = useState(0)
    return (
        <div>
            {NavbarItems.map((item, index) => {
                return (
                    <NavLink
                        component={RouterNavLink}
                        to={item.to}
                        label={<Text>{item.label}</Text>}
                        autoContrast
                        onClick={() => setActive(index)}
                        active={active === index}
                        key={`item-navbar-${item.label}`}
                        color={'coral-red'}
                        className={
                            'rounded-md transition-all duration-500 ease-in-out transform' +
                            (active === index ? ' scale-110' : '') +
                            ' hover:scale-110'
                        }
                    />
                )
            })}
        </div>
    )
}
