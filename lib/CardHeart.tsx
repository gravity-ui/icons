import * as React from 'react';
import type {SVGProps} from 'react';
const CardHeart = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M13.75 4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 1.25H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zm-1 8q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75H5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h6q.725 0 1.237.513.513.512.513 1.237zM6.596 5.499q-.703 0-1.15.524Q5 6.545 5 7.333q0 1.18.952 2.186.696.735 2.02 1.473.028.015.058 0 1.31-.724 2.017-1.473Q11 8.508 11 7.333q0-.788-.446-1.31a1.44 1.44 0 0 0-1.15-.523q-.372 0-.697.332-.364.371-.46.958-.04.247-.287.207a.23.23 0 0 1-.207-.206q-.096-.584-.46-.957-.328-.335-.697-.335Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CardHeart;
