import * as React from 'react';
import type {SVGProps} from 'react';
const FileCheck = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 7.243a2.65 2.65 0 0 0-.806-1.945L9.702 2.056a2.65 2.65 0 0 0-1.945-.806H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zM5 13.75q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h2.757q.726 0 1.238.513l3.243 3.242q.512.513.512 1.237V12q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75zm.4-4.393 1.797 1.796a.48.48 0 0 0 .389.145.48.48 0 0 0 .364-.198l2.7-3.6a.48.48 0 0 0 .095-.37.48.48 0 0 0-.195-.33.48.48 0 0 0-.37-.095.48.48 0 0 0-.33.195L7.669 9.808a.25.25 0 0 1-.377.027L6.107 8.65h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FileCheck;
