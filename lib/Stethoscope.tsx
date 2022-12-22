import * as React from 'react';
import {SVGProps} from 'react';
const Stethoscope = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.513 2.452a.75.75 0 0 0-.526-1.404l-1.027.385A2.25 2.25 0 0 0 .5 3.539V6a4.75 4.75 0 0 0 4.274 4.727 4.75 4.75 0 0 0 9.476-.477v-.364a2.501 2.501 0 1 0-1.5 0v.364a3.25 3.25 0 0 1-6.477.39A4.752 4.752 0 0 0 10 6V3.54a2.25 2.25 0 0 0-1.46-2.107l-1.027-.385a.75.75 0 1 0-.526 1.404l1.026.385a.75.75 0 0 1 .487.702V6A3.25 3.25 0 1 1 2 6V3.54a.75.75 0 0 1 .487-.703l1.026-.385ZM13.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Stethoscope;
