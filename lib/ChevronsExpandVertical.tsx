import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsExpandVertical = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M12.234 4.277 8.353.397A.48.48 0 0 0 8 .25a.48.48 0 0 0-.353.146L3.76 4.282a.48.48 0 0 0-.141.352q.002.205.146.35a.48.48 0 0 0 .35.146.48.48 0 0 0 .348-.137l3.36-3.359q.176-.177.353 0l3.35 3.35h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346zm.165 7.079a.48.48 0 0 0-.147-.358.48.48 0 0 0-.358-.146.5.5 0 0 0-.358.156l-3.36 3.358q-.177.177-.354 0L4.47 11.013l-.006-.007a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362a.48.48 0 0 0 .166.363l3.884 3.884A.48.48 0 0 0 8 15.75a.48.48 0 0 0 .353-.146l3.893-3.892a.48.48 0 0 0 .153-.355Z"
                clipRule="evenodd"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default ChevronsExpandVertical;
