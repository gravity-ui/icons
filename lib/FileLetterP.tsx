import * as React from 'react';
import type {SVGProps} from 'react';
const FileLetterP = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 7.243a2.65 2.65 0 0 0-.806-1.945L9.702 2.056a2.65 2.65 0 0 0-1.945-.806H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zM5 13.75q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h2.757q.726 0 1.238.513l3.243 3.242q.512.513.512 1.237V12q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75zm1-6.5v4q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146A.48.48 0 0 0 7 11.25v-.75q0-.25.25-.25H8.5q.725 0 1.237-.513.513-.512.513-1.237t-.513-1.237A1.7 1.7 0 0 0 8.5 6.75h-2a.48.48 0 0 0-.354.146A.48.48 0 0 0 6 7.25Zm1.25 2Q7 9.25 7 9V8q0-.25.25-.25H8.5q.31 0 .53.22t.22.53a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FileLetterP;
