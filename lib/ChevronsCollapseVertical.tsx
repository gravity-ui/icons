import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsCollapseVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.399 1.606a.48.48 0 0 0-.147-.358.48.48 0 0 0-.358-.146.5.5 0 0 0-.358.156l-3.36 3.358q-.176.177-.353 0L4.47 1.263l-.006-.007a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362a.48.48 0 0 0 .166.363l3.884 3.884A.48.48 0 0 0 8 6a.48.48 0 0 0 .353-.146l3.893-3.892a.48.48 0 0 0 .153-.355Zm-.165 12.421-3.88-3.88A.48.48 0 0 0 8 10a.48.48 0 0 0-.353.146L3.76 14.033a.48.48 0 0 0-.141.352q.002.205.146.35a.48.48 0 0 0 .35.146.48.48 0 0 0 .348-.137l3.36-3.36q.176-.177.353 0l3.35 3.35h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronsCollapseVertical;
