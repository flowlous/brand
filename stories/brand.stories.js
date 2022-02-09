import { Logo, BrandName, Mark } from '../src'

export default {
  title: 'Brand'
}

export function Logos () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 16 }}>
      <Logo height={16} />
      <Logo height={32} />
      <Logo height={44} />
      <Logo height={64} />
      <Logo height={80} />      
      <Logo height={96} />
      <Logo height={128} />
      <Logo height={255} />
    </div>
  )
}

export function Marks () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 16 }}>
      <Mark height={16} />
      <Mark height={32} />
      <Mark height={44} />
      <Mark height={64} />
      <Mark height={80} />      
      <Mark height={96} />
      <Mark height={128} />
      <Mark height={255} />
    </div>
  )
}

export function BrandNames () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 16 }}>
      <BrandName height={16} />
      <BrandName height={32} />
      <BrandName height={44} />
      <BrandName height={64} />
      <BrandName height={80} />      
      <BrandName height={96} />
      <BrandName height={128} />
      <BrandName height={255} />
    </div>
  )
}
