import { useEffect } from "react";

const Even = () => {
    
    useEffect(() => {
        console.log("Mounted")
        
        return () => {
            console.log("Unmounted")
        }
    }, [])

    return <>
        현재 카운트는 짝수입니다.
    </>
};

export default Even