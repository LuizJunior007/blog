import { PaginationLink } from "@/types";
import { Link } from "@inertiajs/react";

type PaginationProps =  {
    links: PaginationLink[]
}

export default function Pagination({ links }: PaginationProps){

    return(

        <div className="d-flex gap-2 mt-3 justify-content-end">
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