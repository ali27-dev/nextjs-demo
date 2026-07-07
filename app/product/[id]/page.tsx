import Link from 'next/link'
import React from 'react'

export default async function page({params}: {params: Promise<{id:string}>}) {

  const {id} = await params
  return (
    <>
  <h1>Page with id Details #{id}</h1>
    </>
  )
}
