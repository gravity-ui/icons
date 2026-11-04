import * as React from 'react';
import type {SVGProps} from 'react';
const ShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.174 1.75q-1.047 0-1.83.697a2.66 2.66 0 0 0-.902 1.738l-.808 7a2.64 2.64 0 0 0 .68 2.145q.819.92 2.052.92h7.268q1.233 0 2.053-.92a2.64 2.64 0 0 0 .679-2.145l-.808-7a2.66 2.66 0 0 0-.902-1.738 2.66 2.66 0 0 0-1.83-.697zm5.652 1q.667 0 1.164.444.498.443.574 1.105l.808 7q.09.78-.432 1.365-.522.586-1.306.586H4.366q-.784 0-1.306-.586a1.68 1.68 0 0 1-.432-1.365l.808-7q.075-.662.574-1.105.498-.444 1.164-.444zm-5.076 2a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v.25q0 1.14.805 1.945A2.65 2.65 0 0 0 8 8.25a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 10.75 5.5v-.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v.25q0 .725-.513 1.237A1.7 1.7 0 0 1 8 7.25q-.725 0-1.237-.513A1.7 1.7 0 0 1 6.25 5.5v-.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ShoppingBag;
