import { useEffect, useState } from "react";

export default function Toast({ msg }: any){

    const [ show, setShow ] = useState<Boolean>(true);

    useEffect(() => {

        const time = setTimeout(() => {

            setShow(false);

        }, 2000);

        return () => clearTimeout(time);

    }, [show]);

    return(

        <>
            { 
                show
                    && 
                <div className="myToast text-light bg-success rounded p-3">
                    { msg }
                </div> 
            }
        </>

    );

}