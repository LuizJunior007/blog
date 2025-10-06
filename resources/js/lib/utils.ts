import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formartDate(value: string){

    const dateObj = new Date(value);

    const date = new Intl.DateTimeFormat('pt-BR', {

        dateStyle: 'medium',
        timeStyle: 'short'

    }).format(dateObj);

    return date;
}
