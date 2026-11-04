import * as React from 'react';
import type {SVGProps} from 'react';
const Pencil = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 4.577q0-1.378-.974-2.353a3.2 3.2 0 0 0-2.353-.974.74.74 0 0 0-.545.226l-7.56 7.559q-.588.588-.75 1.405l-.529 2.638a.71.71 0 0 0 .205.678q.284.284.678.205l2.638-.528a2.7 2.7 0 0 0 1.405-.752l7.03-7.03.528-.529a.74.74 0 0 0 .227-.545Zm-4.517-.56a.25.25 0 0 1-.151-.23.24.24 0 0 1 .073-.177l1.28-1.28a.24.24 0 0 1 .2-.072q.836.075 1.432.673.597.596.672 1.434a.24.24 0 0 1-.072.199l-1.28 1.279a.25.25 0 0 1-.27.055.24.24 0 0 1-.137-.133 3.24 3.24 0 0 0-1.747-1.748ZM4.026 9.742l4.89-4.89h.001l.002-.003a.25.25 0 0 1 .216-.09 2.26 2.26 0 0 1 1.433.673q.595.594.673 1.433a.24.24 0 0 1-.072.2l-4.91 4.91q-.376.376-.895.478l-1.902.38a.24.24 0 0 1-.188-.037.25.25 0 0 1-.106-.257l.38-1.903q.105-.519.478-.894Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Pencil;
