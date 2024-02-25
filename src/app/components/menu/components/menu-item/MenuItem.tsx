import { MenuItemProps } from '../../../schemas/menu.schema.ts'
import { NavLink } from 'react-router-dom'

export const MenuItem = ({ label, link, Icon }: MenuItemProps) => {
    return (
        <NavLink
            className={({ isActive }) => {
                return isActive
                    ? 'flex w-full h-3 items-center px-2 py-6  gap-2 text-sm font-medium bg-coral-red-400 text-white hover:text-white '
                    : 'flex w-full h-3 items-center px-2 py-6  gap-2 text-sm font-medium text-gray-500 hover:text-coral-red-600 hover:bg-coral-red-50'
            }}
            to={link}
        >
            <Icon className='h-5 w-5' />
            <span className='font-bold'>{label}</span>
        </NavLink>
    )
}
