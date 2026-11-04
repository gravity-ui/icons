import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsExpandVerticalFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.147 4.499A.48.48 0 0 0 5 4.852q0 .207.146.353a.48.48 0 0 0 .353.146.48.48 0 0 0 .353-.146l1.97-1.97A.24.24 0 0 1 8 3.162a.24.24 0 0 1 .177.073l1.966 1.967h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346h-.001L8.353 1.998A.48.48 0 0 0 8 1.853a.48.48 0 0 0-.353.146zm-2.75 3.147A.48.48 0 0 0 2.25 8q0 .207.146.354a.48.48 0 0 0 .354.146h10.5a.48.48 0 0 0 .354-.146A.48.48 0 0 0 13.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H2.75a.48.48 0 0 0-.354.146ZM4.98 11.14a.48.48 0 0 0 .166.363l2.5 2.5a.48.48 0 0 0 .353.145.48.48 0 0 0 .353-.146l2.5-2.5.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-1.97 1.97q-.177.177-.354 0l-1.97-1.97-.006-.006a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsExpandVerticalFromLine;
