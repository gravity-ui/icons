import * as React from 'react';
import type {SVGProps} from 'react';
const Flask = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 2q0-.46-.302-.76Q9.21.75 8 .75t-1.698.49A1.03 1.03 0 0 0 6 2v3.39a.6.6 0 0 1-.105.341L2.77 10.315A2.93 2.93 0 0 0 2.25 12q0 1.344 1.632 2.283 1.68.967 4.118.967 2.44 0 4.118-.967Q13.75 13.344 13.75 12q0-.923-.52-1.685L10.105 5.73A.6.6 0 0 1 10 5.39zm2.75 10q0 .759-1.112 1.405l-.001.001-.002.001-.016.01q-1.45.834-3.619.834-2.171 0-3.619-.833Q3.25 12.766 3.25 12q0-.616.347-1.122L6.72 6.294A1.57 1.57 0 0 0 7 5.39V2.91a.24.24 0 0 1 .073-.177.25.25 0 0 1 .237-.066q.33.083.69.083t.688-.083a.24.24 0 0 1 .19.027A.25.25 0 0 1 9 2.91v2.482q0 .494.278.903l3.126 4.584q.345.505.346 1.122ZM8.916 8.473l1.502 2.252a.48.48 0 0 1 .077.377.48.48 0 0 1-.213.32.48.48 0 0 1-.378.075.5.5 0 0 1-.32-.22l-1.5-2.25a.48.48 0 0 1-.074-.375.48.48 0 0 1 .213-.318.48.48 0 0 1 .375-.074.48.48 0 0 1 .318.213Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Flask;
