import * as React from 'react';
import {SVGProps} from 'react';
const HeartFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.067 3.2C2.785 2.424 3.807 2 5 2c.995 0 1.83.43 2.46 1.219.202.251.38.537.54.854.16-.317.338-.603.54-.854C9.17 2.429 10.004 2 11 2c1.19 0 2.21.421 2.93 1.197.713.77 1.07 1.823 1.07 2.989 0 2.005-1.045 3.613-2.356 4.855-1.307 1.24-2.947 2.184-4.303 2.876a.75.75 0 0 1-.685-.002c-1.355-.698-2.996-1.635-4.303-2.87C2.043 9.808 1 8.205 1 6.186c0-1.16.355-2.214 1.067-2.984Z"
            clipRule="evenodd"
        />
    </svg>
);
export default HeartFill;
