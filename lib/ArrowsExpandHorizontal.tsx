import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowsExpandHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.397 7.647q-.137.136-.146.328a.48.48 0 0 0 .105.334l.001.001.043.046 2.497 2.497.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-1.22-1.22q-.177-.177 0-.354A.24.24 0 0 1 3.56 8.5h8.88q.25 0 .25.25a.24.24 0 0 1-.073.177L11.4 10.144l-.044.046v.002a.48.48 0 0 0-.11.336.48.48 0 0 0 .146.33q.136.137.33.146a.48.48 0 0 0 .336-.11h.002l.046-.044 2.497-2.497q.284-.284.071-.618l-.002-.002-.077-.095-2.492-2.491-.006-.007a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362a.48.48 0 0 0 .166.363l1.22 1.22q.177.177 0 .354a.24.24 0 0 1-.177.073H3.56q-.25 0-.25-.25a.24.24 0 0 1 .073-.177L4.6 5.856l.044-.046v-.002a.48.48 0 0 0 .11-.336.48.48 0 0 0-.146-.33.48.48 0 0 0-.33-.146.48.48 0 0 0-.336.11H3.94l-.046.044z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowsExpandHorizontal;
