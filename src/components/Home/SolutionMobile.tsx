import { ExpertiseSectionImageLeftProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const SolutionMobile = ({ img }: ExpertiseSectionImageLeftProps) => {
  return (
    <div style={{ position: "relative" }}>
    <h1 className="h-[350px] md:h-[300px] w-[350px] md:w-[300px] relative  rounded rounded-ss-3xl  bg-white"></h1>
    <div className="absolute inset-0 flex justify-center items-center">
      <Image
        className="h-[350px] md:h-[300px] w-[350px] ,md:w-[300px] rounded rounded-se-3xl absolute top-3 "
        width={350}
        height={350}
        src={img}
        alt=""
      />
    </div>
  </div>
  )
}

export default SolutionMobile