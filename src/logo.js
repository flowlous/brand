
import React from 'react'

import { BrandName } from './brand-name'
import { Mark } from './mark'

export function Logo ({ className, ...props }) {
  return (
    <svg viewBox='0 0 282 55' className={className} {...props}>
      <g>
        <Mark height={55} width={55}/>
      </g>
      <g transform='translate(55, 5) scale(.85)'>
        <BrandName heigth={61} width={279}/> 
      </g>
    </svg>
  )
}