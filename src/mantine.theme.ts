import { MantineTheme } from '@mantine/core'

type DeepPartial<T> = {
    [P in keyof T]?: Partial<T[P]>
}

export const theme: DeepPartial<MantineTheme> = {
    fontFamily: 'Inter',
    activeClassName: 'bg-coral-500 text-white',
    colors: {
        'coral-red': [
            '#fef4f1',
            '#fee7e1',
            '#ffcfc7',
            '#feada4',
            '#fa7770',
            '#f34f4f',
            '#e0242e',
            '#be1929',
            '#9a192c',
            '#821c30',
            '#440918',
        ],
    },
    components: {},
}
