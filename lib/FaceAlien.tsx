import * as React from 'react';
import type {SVGProps} from 'react';
const FaceAlien = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.072 11.749C12.447 10.539 13.5 8.915 13.5 7c0-1.376-.48-2.45-1.313-3.195C11.34 3.047 9.98 2.5 8 2.5s-3.34.547-4.187 1.305C2.98 4.55 2.5 5.625 2.5 7c0 1.915 1.053 3.539 2.428 4.749a9.484 9.484 0 0 0 2.01 1.36 5.5 5.5 0 0 0 .778.32c.17.054.262.067.284.07.022-.003.113-.016.284-.07a5.5 5.5 0 0 0 .778-.32 9.484 9.484 0 0 0 2.01-1.36ZM8 15c1.5 0 7-3 7-8 0-3.5-2.5-6-7-6S1 3.5 1 7c0 5 5.5 8 7 8Zm1.25-5a.75.75 0 0 1-.75-.75c0-.842.345-1.553.922-2.041C9.986 6.73 10.73 6.5 11.5 6.5a.75.75 0 0 1 .75.75c0 .842-.345 1.553-.922 2.041-.564.478-1.308.709-2.078.709ZM7.5 9.25a.75.75 0 0 1-.75.75c-.77 0-1.514-.231-2.078-.709-.577-.488-.922-1.199-.922-2.041a.75.75 0 0 1 .75-.75c.77 0 1.514.231 2.078.709.577.488.922 1.199.922 2.041Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FaceAlien;