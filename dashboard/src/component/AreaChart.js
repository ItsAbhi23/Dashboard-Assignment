import React from 'react'
import Maggie from "../images/maggie.jpeg"
// import { ApexCharts } from 'ApexChart.js'
function AreaChart() {
  return (
    <div className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-4">
      {/* <ApexCharts/> */}
    <div className="items-stretch bg-white h-3/4 flex flex-col p-6 rounded-2xl max-md:max-w-full max-md:px-5">
      <div className="justify-between items-stretch flex w-full gap-2 pb-4 max-md:max-w-full max-md:flex-wrap">
        <div className="text-neutral-900 text-xl font-semibold tracking-normal">
          Growth
        </div>
        <div className="items-stretch flex gap-1 self-start">
          <div className="text-zinc-700 text-sm tracking-tight grow">
            Yearly
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa9a54f827724dc9c6b6171ec4a846b3d8193bf19754a05eaf53e0691347eda?"
            className="aspect-square object-contain object-center w-3.5 shrink-0 my-auto"
          />
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-4 mt-2 pr-3.5 max-md:max-w-full max-md:flex-wrap">
        <div className="justify-between items-stretch flex basis-0 flex-col text-xs text-zinc-500 font-medium whitespace-nowrap tracking-tight self-start">
          <div className="">100k</div>
          <div className="mt-4">50k</div>
          <div className="mt-4">20k</div>
          <div className="mt-4">10k</div>
          <div className="mt-4">0</div>
        </div>
        <div className="justify-center items-stretch flex flex-col flex-1 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[2.7] object-contain object-center w-full max-md:max-w-full"
          />
        </div>
      </div>
    </div>
    <div className="mt-3 max-md:max-w-full">
      <div className="gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-1/3  max-md:w-full max-md:ml-0">
          <div className="self-stretch bg-white flex grow flex-col text-base font-semibold tracking-normal w-full p-4 rounded-2xl items-start max-md:mt-4">
            <div className="text-zinc-500 tracking-tight self-stretch">
              Top month
            </div>
            <div className="text-yellow-900 text-2xl mt-7">
              November
            </div>
            <div className="text-amber-500 font-medium">
              2019
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/3  ml-5 max-md:w-full max-md:ml-0">
          <div className="self-stretch bg-white flex grow flex-col text-base font-semibold w-full p-4 rounded-2xl items-start max-md:mt-4">
            <div className="text-zinc-500 text-base tracking-tight self-stretch">
              Top year
            </div>
            <div className="text-yellow-900 text-2xl tracking-normal mt-7">
              2023
            </div>
            <div className="text-zinc-700 text-sm tracking-tight whitespace-nowrap mt-1">
              96K sold so far
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/3 ml-5 max-md:w-full max-md:ml-0">
          <div className="self-stretch bg-white flex grow flex-col tracking-tight w-full p-4 rounded-2xl items-start max-md:mt-4">
            <div className="text-zinc-500 text-base font-semibold tracking-tight self-stretch">
              Top buyer
            </div>
            <img
              loading="lazy"
              src={Maggie}
              className="aspect-[1.09] rounded-full object-contain object-center w-6 justify-center items-center mt-4"
            />
            <div className="text-neutral-900 text-xs font-medium whitespace-nowrap mt-2">
              Maggie Johnson
            </div>
            <div className="text-zinc-700 text-xs whitespace-nowrap mt-1">
              Oasis Organic Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AreaChart
