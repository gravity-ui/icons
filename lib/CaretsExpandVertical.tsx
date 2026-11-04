import * as React from 'react';
import type {SVGProps} from 'react';
const CaretsExpandVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="m11.632 5.959-3.02-3.453a.72.72 0 0 0-.566-.256h-.092a.72.72 0 0 0-.565.256L4.37 5.959a.44.44 0 0 0-.076.511q.126.28.434.28h6.546a.46.46 0 0 0 .337-.14.46.46 0 0 0 .14-.337q0-.18-.118-.314ZM4.368 10.04l3.02 3.453q.225.255.565.256h.092a.72.72 0 0 0 .565-.256l3.02-3.453a.44.44 0 0 0 .077-.51.44.44 0 0 0-.434-.281H4.727a.46.46 0 0 0-.337.14.46.46 0 0 0-.14.337q0 .18.118.314Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CaretsExpandVertical;
