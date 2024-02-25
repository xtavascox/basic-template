import { FaHouseChimney } from 'react-icons/fa6'
import { MenuProps } from '../schemas/menu.schema.ts'
import { MenuItem } from './components/menu-item/MenuItem.tsx'

export const Menu = ({ Items, title }: MenuProps) => {
    return (
        <div className={`flex h-full border-r flex-col shrink-0 w-full `}>
            <div className='grid w-1/2 h-14 items-center px-2'>
                <div className='flex items-center space-x-2 text-sm font-medium'>
                    <span className='truncate text-lg font-bold '>{title}</span>
                </div>
            </div>
            <nav className=' grid w-full'>
                {Items.map((item, index) => (
                    <MenuItem
                        key={`${item}-menu-item-${index}`}
                        Icon={item.Icon || FaHouseChimney}
                        label={item.label}
                        link={item.link}
                    />
                ))}
            </nav>
        </div>
    )
}
