import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LogoFacebook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.5 13.478a5.5 5.5 0 1 0-1.5-.069V9.75H5.75a.75.75 0 0 1 0-1.5H7V7.24c0-.884.262-1.568.722-2.032S8.843 4.5 9.644 4.5c.273 0 .612.04.948.213a.75.75 0 0 1-.685 1.334A.6.6 0 0 0 9.644 6c-.493 0-.737.144-.857.265-.12.12-.287.39-.287.975v1.01h1.25a.75.75 0 0 1 0 1.5H8.5zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(LogoFacebook);
export default ForwardRef;
