import { PaginationLink } from "@/types";
import { Link } from "@inertiajs/react";

type PaginationProps =  {
    links: PaginationLink[]
}

export default function Pagination({ links }: PaginationProps){

    return(

        <div className="">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? '#'}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`btn btn-sm ${
                        link.active ? 'btn-primary' : 'btn-outline-secondary'
                    } ${!link.url ? 'disabled' : ''}`}
                />
            ))}
        </div>

    );

}