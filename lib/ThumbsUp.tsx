import * as React from 'react';
import type {SVGProps} from 'react';
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="m7.156 2.085-2.893 4.96-.008.014.48 6.717 4.89.576a3.64 3.64 0 0 0 2.53-.612 3.64 3.64 0 0 0 1.522-2.11l.88-3.162a1.66 1.66 0 0 0-.294-1.527q-.525-.69-1.393-.691H9.93q-.25 0-.25-.25a.3.3 0 0 1 .006-.052l.32-1.5.25-1.163q.131-.608-.163-1.155a1.63 1.63 0 0 0-.874-.772 1.63 1.63 0 0 0-1.165-.018q-.586.207-.898.744ZM5.879 12.903q-.205-.024-.22-.23l-.38-5.3a.25.25 0 0 1 .034-.144l2.708-4.64a.66.66 0 0 1 .363-.3.66.66 0 0 1 .473.007q.235.09.354.312a.66.66 0 0 1 .066.467l-.57 2.663-.325 1.512h4.487q.372 0 .597.296.225.297.126.655l-.88 3.162a2.67 2.67 0 0 1-1.115 1.547 2.67 2.67 0 0 1-1.847.45v-.001h-.008zM2.33 7.112a.48.48 0 0 0-.366-.124.48.48 0 0 0-.346.174.5.5 0 0 0-.117.373l.5 6.996q.018.204.174.336a.48.48 0 0 0 .36.118.48.48 0 0 0 .339-.168.48.48 0 0 0 .125-.352l-.5-7.005a.48.48 0 0 0-.169-.348Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ThumbsUp;
