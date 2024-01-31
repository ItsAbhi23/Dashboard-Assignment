import React from 'react'
import Goal from './Goal'

function Statistics() {
  return (
    <div className="gap-1 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                  <div className="self-stretch bg-white flex w-full grow flex-col mx-auto pl-6 pr-20 py-6 rounded-2xl items-start max-md:mt-4 max-md:px-5">
                    <div className="text-neutral-900 text-xl font-semibold tracking-normal">
                      Revenues
                    </div>
                    <div className="items-stretch flex gap-2 mt-6 pr-5">
                      <div className="text-neutral-900 text-5xl font-medium tracking-tighter grow shrink basis-auto max-md:text-4xl">
                        15%
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7194159dc45904590c725cca7c61f0dd25ccacb851f551e39e27e0d010b8596c?"
                        className="aspect-square object-contain object-center w-8 shrink-0 my-auto"
                      />
                    </div>
                    <div className="text-zinc-700 text-sm tracking-tight whitespace-nowrap mt-2">
                      Increase compared to last week
                    </div>
                    <div className="items-stretch flex gap-1 mt-16 pr-2.5 max-md:mt-10">
                      <div className="text-yellow-900 text-sm tracking-tight grow shrink basis-auto">
                        Revenues report
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2934408fdd779b8385ff7be36af90efe41725c4c91c087ed6f8db7d928754b9e?"
                        className="aspect-square object-contain object-center w-3.5 shrink-0 self-start"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="self-stretch bg-white flex w-full grow flex-col text-neutral-900 mx-auto pl-6 pr-20 py-6 rounded-2xl items-start max-md:mt-4 max-md:px-5">
                    <div className="text-xl font-semibold tracking-normal">
                      Lost deals
                    </div>
                    <div className="text-5xl font-medium tracking-tighter mt-6 max-md:text-4xl">
                      4%
                    </div>
                    <div className="text-zinc-700 text-sm tracking-tight whitespace-nowrap mt-2">
                      You closed 96 out of 100 deals
                    </div>
                    <div className="items-stretch flex gap-1 mt-16 pr-7 max-md:mt-10 max-md:pr-5">
                      <div className="text-yellow-900 text-sm tracking-tight grow shrink basis-auto">
                        All deals
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/48dfa3848c4a447ba92ac7673e35c2bea0710b8f76946a80e9efffe411a9104a?"
                        className="aspect-square object-contain object-center w-3.5 shrink-0 self-start"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                   <Goal/>
                </div>
              </div>
  )
}

export default Statistics
