import { z } from 'zod'

const MenuItemSchema = z.object({
    label: z.string(),
    Icon: z.any().optional(),
    link: z.string(),
})

const MenuSchema = z.object({
    Items: z.array(MenuItemSchema),
    title: z.string(),
    Icon: z.any().optional(),
    link: z.string(),
})

export type MenuProps = z.infer<typeof MenuSchema>
export type MenuItemProps = z.infer<typeof MenuItemSchema>
