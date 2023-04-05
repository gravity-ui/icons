import * as React from 'react';
import {SVGProps} from 'react';
const CircleDollar = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.477 2.477 0 0 0-1.007.47 1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559.456.287 1.007.448 1.448.547.462.102.843.191 1.118.341.228.125.275.224.275.376 0 .102-.04.217-.248.341-.224.135-.577.229-.982.229-.344 0-.683-.114-.953-.29-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382.53-.319.976-.864.976-1.627 0-.864-.51-1.394-1.055-1.692-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227.47 0 .742.11.9.218a.832.832 0 0 1 .316.41.75.75 0 0 0 1.407-.52 2.331 2.331 0 0 0-.878-1.13 2.714 2.714 0 0 0-1.048-.417V4.25Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleDollar;
