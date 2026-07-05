import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
     <h1 className='mb-20 text-2xl font-bold'>Links Page</h1>

    <ul>
      <li><Link href="/product/1">Product 1</Link></li>
      <li><Link href="/product/2">Product 2</Link></li>
      <li><Link href="/product/3">Product 3</Link></li>
      <li><Link href="/product/4">Product 4</Link></li>
    </ul>
    </>
  )
}
