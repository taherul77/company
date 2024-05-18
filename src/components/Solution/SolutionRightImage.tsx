import { SectionImageLeftProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const SolutionRightImage = ({ img }: SectionImageLeftProps) => {
  return (
    <div className=" flex ">
    <Image
      className="rounded  object-cover"
      width={100}
      height={100}
      src={img}
      alt=""
    />
  </div>
  )
}

export default SolutionRightImage