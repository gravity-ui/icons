import * as React from 'react';
import {SVGProps} from 'react';
const Star = (props: SVGProps<SVGSVGElement>) => (
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
            d="m9.194 5 .351.873.94.064 3.197.217-2.46 2.055-.722.603.23.914.782 3.108-2.714-1.704L8 10.629l-.798.5-2.714 1.705.782-3.108.23-.914-.723-.603-2.46-2.055 3.198-.217.94-.064.35-.874L8 2.025 9.194 5Zm-7.723-.292 3.943-.268L6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667 3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Star;
