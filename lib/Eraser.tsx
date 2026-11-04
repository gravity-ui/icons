import * as React from 'react';
import type {SVGProps} from 'react';
const Eraser = (props: SVGProps<SVGSVGElement>) => (
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
            d="m.884 12.03 1.72 1.72H15.25a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H9q-.25 0-.25-.25a.24.24 0 0 1 .073-.177l4.293-4.294.012-.01.001-.002.002-.001q.62-.63.62-1.516 0-.897-.635-1.53L10.53 2.384A2.1 2.1 0 0 0 9 1.75q-.897 0-1.53.634L.884 8.97A2.1 2.1 0 0 0 .25 10.5q0 .897.634 1.53Zm11.525-6.353q.34.342.34.823t-.34.823l-3.512 3.514q-.177.177-.354 0l-3.88-3.88a.24.24 0 0 1-.073-.177.24.24 0 0 1 .073-.177l3.513-3.512q.342-.34.823-.34.471 0 .807.325l.001.001.002.001.014.013zm-10.818 4 2.012-2.014a.24.24 0 0 1 .177-.073.24.24 0 0 1 .177.073l3.88 3.88q.177.177 0 .354l-.78.78a.24.24 0 0 1-.177.073H3.12a.24.24 0 0 1-.177-.073l-1.352-1.354a1.12 1.12 0 0 1-.34-.823q0-.481.34-.823Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Eraser;
