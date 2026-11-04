import * as React from 'react';
import type {SVGProps} from 'react';
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.945 2.555A2.65 2.65 0 0 0 11 1.75H5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 4.5v8.175q0 .462.249.85.248.39.668.581.42.193.876.13.457-.065.807-.365l2.987-2.56q.163-.141.326 0l2.987 2.56q.35.3.807.363.456.064.875-.128.42-.192.669-.58.249-.39.249-.85V4.5a2.65 2.65 0 0 0-.805-1.945Zm-4.132 7.996-.78-.67L8 9.853l-.813.699-2.988 2.56a.53.53 0 0 1-.615.085.53.53 0 0 1-.334-.522V4.5q0-.725.513-1.237A1.7 1.7 0 0 1 5 2.75h6q.725 0 1.237.513.513.512.513 1.237v8.175q-.001.368-.335.521a.53.53 0 0 1-.613-.085z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Bookmark;
