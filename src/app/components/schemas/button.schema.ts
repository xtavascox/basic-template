import { z } from 'zod'

const variantSchema = z.enum(['primary', 'secondary', 'outline', 'link', 'ghost'])
const ButtonSchema = z.object({
    text: z.string(),
    variant: variantSchema.optional(),
})

export type ButtonProps = z.infer<typeof ButtonSchema>
export type VariantType = z.infer<typeof variantSchema>
