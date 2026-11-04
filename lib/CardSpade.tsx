import * as React from 'react';
import type {SVGProps} from 'react';
const CardSpade = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 1.25H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zm-1 8q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75H5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h6q.725 0 1.237.513.513.512.513 1.237zm-3.5-.75v-.146l-.015-.015-.277-.278a3.2 3.2 0 0 1-.88-1.602.24.24 0 0 1 .054-.217q.163-.189.353-.027.332.285.811.285.636 0 1.047-.397.407-.393.407-.998 0-.762-.754-1.53-.463-.472-1.6-1.246h-.001l-.044-.03-.322-.223L8 4.806l-.028.02-.361.249-.003.001q-1.14.776-1.603 1.25-.755.77-.755 1.529 0 .605.407.998.411.397 1.047.397.48 0 .811-.285a.24.24 0 0 1 .217-.054.24.24 0 0 1 .157.11.24.24 0 0 1 .033.188 3.2 3.2 0 0 1-.88 1.602l-.292.293v.146z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CardSpade;
