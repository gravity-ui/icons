import * as React from 'react';
import type {SVGProps} from 'react';
const FileExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 7.243a2.65 2.65 0 0 0-.806-1.945L9.702 2.056a2.65 2.65 0 0 0-1.945-.806H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zm-1.513 5.994A1.7 1.7 0 0 1 11 13.75H5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h2.757q.726 0 1.238.513l3.243 3.242q.512.513.512 1.237V12q0 .725-.513 1.237ZM8.5 5.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 5.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354V8.5q0 .207.146.354A.48.48 0 0 0 8 9a.48.48 0 0 0 .354-.146A.48.48 0 0 0 8.5 8.5zM8 12a.72.72 0 0 0 .53-.22.72.72 0 0 0 .22-.53.72.72 0 0 0-.22-.53.72.72 0 0 0-.53-.22.72.72 0 0 0-.53.22.72.72 0 0 0-.22.53q0 .31.22.53T8 12Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FileExclamation;
