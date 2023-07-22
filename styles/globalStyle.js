import { css } from '@emotion/react'

export const globalStyles = css`
    *{
        margin: 0;
        /* box-sizing: border-box; */
        font-family: "myfont";
    }

    @font-face {
        font-family: "myfont";
        src: url("/fonts/header.ttf");
    }

    @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: "font1";
        src: url("/fonts/초보.ttf");
    }

    @font-face {
        font-family: "font2";
        src: url("/fonts/표준.ttf");
    }

    @font-face {
        font-family: "font3";
        src: url("/fonts/숙련.ttf");
    }

    @font-face {
        font-family: "font4";
        src: url("/fonts/전문.ttf");
    }

    @font-face {
        font-family: "font5";
        src: url("/fonts/예술.ttf");
    }
`;