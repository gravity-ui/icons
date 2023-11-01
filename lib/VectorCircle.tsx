import * as React from 'react';
import type {SVGProps} from 'react';
const VectorCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 5.5a2.74 2.74 0 0 1-1.444-.409 2.764 2.764 0 0 1-.914-.925c-.6.37-1.106.877-1.476 1.476a2.749 2.749 0 0 1 0 4.716c.37.6.877 1.106 1.476 1.476a2.749 2.749 0 0 1 4.716 0c.6-.37 1.106-.877 1.476-1.476l-.028-.017a2.748 2.748 0 0 1 .028-4.699 4.524 4.524 0 0 0-1.476-1.476l-.017.028A2.748 2.748 0 0 1 8 5.5Zm2.749-2.835a2.75 2.75 0 0 0-5.498 0 6.026 6.026 0 0 0-2.586 2.586 2.75 2.75 0 0 0 0 5.498 6.026 6.026 0 0 0 2.586 2.586 2.749 2.749 0 0 0 5.09 1.359c.245-.398.393-.862.408-1.36a6.027 6.027 0 0 0 2.586-2.585A2.749 2.749 0 0 0 16 8a2.75 2.75 0 0 0-2.665-2.749 6.027 6.027 0 0 0-2.586-2.586ZM9.25 2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM4 8a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 4 8Zm5.25 5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm4-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default VectorCircle;
