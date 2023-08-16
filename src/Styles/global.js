import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/* 
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Light';
        src: url('../../public/Assets/Font/Pretendard-Light.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('../../public/Assets/Font/Pretendard-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('../../public/Assets/Font/Pretendard-Medium.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('../../public/Assets/Font/Pretendard-Bold.otf') format('opentype');
    }

    * {
        box-sizing: border-box;
        font-family: 'Pretendard-Regular';
    }

    button {
        border: none;
    }

    ul > li {
        list-style: none;
    }
`;

export default GlobalStyles;
