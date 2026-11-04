import * as React from 'react';
import type {SVGProps} from 'react';
const FileMagnifier = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 7.243a2.65 2.65 0 0 0-.806-1.945L9.702 2.056a2.65 2.65 0 0 0-1.945-.806H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4v8q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12zM5 13.75q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V4q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.25h2.757q.726 0 1.238.513l3.243 3.242q.512.513.512 1.237V12q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75zM7.5 11q.552 0 1.04-.255.163-.084.293.045l.814.813.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-.813-.814q-.129-.13-.045-.293.506-.97.055-1.967-.452-.997-1.514-1.258-1.064-.26-1.925.415-.86.675-.861 1.77 0 .932.658 1.592.66.66 1.592.658Zm0-1q-.518 0-.884-.366a1.2 1.2 0 0 1-.366-.884q0-.518.366-.884T7.5 7.5t.884.366.366.884-.366.884A1.2 1.2 0 0 1 7.5 10Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FileMagnifier;
