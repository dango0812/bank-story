import { useEffect, useState } from 'react';

type ReturnType = boolean;
type Type = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** use for responsive hook
    * @param {Type} type Type xs: 0 | sm: 600 | md: 900 | lg: 1200 | xl: 1536
    * @param {ReturnType} return Return true or false
*/
export default function useResponsive(type: Type): ReturnType {
    const [returnType, setReturnType] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            let returnType = false;

            if (type === 'xs') {
                if (window.innerWidth > 0)
                    returnType = true;

            } else if (type === 'sm') {
                if (window.innerWidth >= 600)
                    returnType = true;

            } else if (type === 'md') {
                if (window.innerWidth >= 900)
                    returnType = true;

            } else if (type === 'lg') {
                if (window.innerWidth >= 1200)
                    returnType = true;

            } else if (type === 'xl') {
                if (window.innerWidth >= 1536)
                    returnType = true;
            }

            setReturnType(returnType);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);

    }, []);

    return returnType;
}