import * as React from 'react';
import type {SVGProps} from 'react';
const NutHex = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.956 8.875A1.7 1.7 0 0 0 15.191 8a1.7 1.7 0 0 0-.235-.875l-2.72-4.712a1.7 1.7 0 0 0-.641-.64 1.7 1.7 0 0 0-.875-.235H5.28a1.7 1.7 0 0 0-.875.234 1.7 1.7 0 0 0-.64.641l-2.72 4.712A1.7 1.7 0 0 0 .81 8q0 .469.235.875l2.72 4.712q.234.406.64.64.405.235.875.235h5.44q.47 0 .876-.234t.64-.641zm-3.585 4.212a.7.7 0 0 1-.65.375H5.28a.7.7 0 0 1-.65-.375L1.91 8.375a.7.7 0 0 1 0-.75l2.72-4.712a.7.7 0 0 1 .65-.375h5.44q.433 0 .65.375l2.72 4.712a.7.7 0 0 1 .012.727v.001l-.001.002-.01.02zM8 10.75a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 10.75 8a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 8 5.25a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 5.25 8q0 1.14.805 1.945A2.65 2.65 0 0 0 8 10.75Zm0-1q-.725 0-1.237-.513A1.7 1.7 0 0 1 6.25 8q0-.725.513-1.237A1.7 1.7 0 0 1 8 6.25q.725 0 1.237.513.513.512.513 1.237t-.513 1.237A1.7 1.7 0 0 1 8 9.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default NutHex;
