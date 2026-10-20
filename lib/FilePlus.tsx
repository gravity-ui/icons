import * as React from 'react';
import type {SVGProps} from 'react';
const FilePlus = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 7.243a2.65 2.65 0 0 0-.806-1.945L9.702 2.056a2.65 2.65 0 0 0-1.945-.806H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zm-1.513 5.994A1.7 1.7 0 0 1 11 13.75H5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h2.757q.726 0 1.238.513l3.243 3.242q.512.513.512 1.237V12q0 .725-.513 1.237ZM8 6.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v1.5q0 .25-.25.25h-1.5a.48.48 0 0 0-.354.146A.48.48 0 0 0 5.25 9q0 .207.146.354a.48.48 0 0 0 .354.146h1.5q.25 0 .25.25v1.5q0 .207.146.354A.48.48 0 0 0 8 11.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354v-1.5q0-.25.25-.25h1.5a.48.48 0 0 0 .354-.146A.48.48 0 0 0 10.75 9a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-1.5q-.25 0-.25-.25v-1.5a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 6.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FilePlus;
