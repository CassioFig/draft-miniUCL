export type IClassTypes = 'G' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

export type IClass = {
    name: string
    class: IClassTypes
}

export const classes: IClass[] = [
    { name: 'Goleiros', class: 'G' },
    { name: 'Pote 1', class: '1' },
    { name: 'Pote 2', class: '2' },
    { name: 'Pote 3', class: '3' },
    { name: 'Pote 4', class: '4' },
    { name: 'Pote 5', class: '5' },
    { name: 'Pote 6', class: '6' },
    { name: 'Pote 7', class: '7' },
    { name: 'Pote 8', class: '8' },
    { name: 'Pote 9', class: '9' },
]