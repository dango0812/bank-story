// styles
import { css } from '@emotion/react';
// hooks
import useResponsive from 'src/hooks/use-responsive';

const RootStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export default function Header() {
    
    const isDesktop = useResponsive('md'); 

    console.log(isDesktop);

    return (
        <div css={RootStyle}>
            <div>
                Logo
            </div>
            <div>
                NavList
            </div>
        </div>
    )
}
