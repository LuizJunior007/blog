import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    //email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    //[key: string]: unknown; // This allows for additional properties...
}

export interface CategorieProps{
    id: number;
    name: string;
}

export type UserProps = {

    id: number;
    name: string;
    lastname: string;
    email: string;
    is_admin: number;
    created_at: string;
    updated_at: string;
}

export type PaginatedResponse<T> = {
    data: T[];
        links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    meta: {
        current_page: number;
        last_page: number;
        from: number | null;
        to: number | null;
        total: number;
    };
};

export type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};
