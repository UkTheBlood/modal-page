import { useEffect, useRef } from "react";

export const useOutsideClickClose = (handler) => {
    const ref = useRef(null);
    console.log(ref)

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        // mousedown => 마우스 왼쪽 클릭을 하면 일어남
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, handler]);

    return ref;
};