import React from 'react'
import Harry from '../images/harry.webp'
import Maggie from '../images/maggie.jpeg'
import Chris from '../images/crish.jpeg'
import Jenna from '../images/jenna.webp'
function CustomerList() {
  return (
    <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch bg-white flex grow flex-col w-full py-6 rounded-2xl max-md:max-w-full max-md:mt-4">
                    <div className="justify-between items-stretch flex w-full gap-2 px-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                      <div className="text-neutral-900 text-xl font-semibold tracking-normal grow shrink basis-auto">
                        Customers
                      </div>
                      <div className="items-stretch flex gap-1 my-auto">
                        <div className="text-zinc-700 text-sm tracking-tight grow whitespace-nowrap">
                          <span className="text-zinc-700">Sort by </span>
                          <span className="font-medium text-zinc-700">
                            Newest
                          </span>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa9a54f827724dc9c6b6171ec4a846b3d8193bf19754a05eaf53e0691347eda?"
                          className="aspect-square object-contain object-center w-3.5 shrink-0 my-auto"
                        />
                      </div>
                    </div>
                    <div className="items-stretch flex flex-col mt-4 pb-3.5 px-2 max-md:max-w-full">
                      <div className="items-stretch flex justify-between gap-3 p-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src={Chris}
                          className="aspect-square object-contain object-center w-8 justify-center items-center shrink-0 my-auto rounded-full"
                        />
                        <div className="justify-center items-stretch flex flex-col tracking-tight flex-1 max-md:max-w-full">
                          <div className="text-neutral-900 text-sm font-medium max-md:max-w-full">
                            Chris Friedkly
                          </div>
                          <div className="text-zinc-700 text-xs max-md:max-w-full">
                            Supermarket Villanova
                          </div>
                        </div>
                      </div>
                      <div className="items-stretch bg-orange-50 flex gap-3 p-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <img
                          loading="lazy"
                         src={Maggie}
                         className="aspect-square object-contain object-center w-8 justify-center items-center shrink-0 my-auto rounded-full"
                        />
                        <div className="justify-center items-stretch flex flex-col tracking-tight flex-1 self-start">
                          <div className="text-neutral-900 text-sm font-medium">
                            Maggie Johnson
                          </div>
                          <div className="text-zinc-700 text-xs">
                            Oasis Organic Inc.
                          </div>
                        </div>
                        <div className="items-stretch flex justify-between gap-5 pr-2.5">
                          <div className="items-stretch flex justify-between gap-5 p-2.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b32b25326e1dc552774950056935beb2df6526ff5d87a99934c4511c87aacd7?"
                              className="aspect-square object-contain object-center w-4 shrink-0"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/073142bf71d169b514267f7c8c08c68adad97025b1d424036f8bd9388ab02455?"
                              className="aspect-square object-contain object-center w-4 shrink-0"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6a9d718afad6685daf92242ed31eecfb6eea7fb89620a26daf58a778bb1f1a7?"
                              className="aspect-square object-contain object-center w-4 shrink-0"
                            />
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f083280dcc09c69bdfecc44092d7d8f53c1c6249ba3ab02180e46d9238160f0?"
                            className="aspect-square object-contain object-center w-4 shrink-0 my-auto"
                          />
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-3 p-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <img
                          loading="lazy"
                         src={Harry}
                        
                        className="aspect-square object-contain object-center w-8 justify-center items-center shrink-0 my-auto rounded-full"
                        />
                        <div className="justify-center items-stretch flex flex-col tracking-tight flex-1 max-md:max-w-full">
                          <div className="text-neutral-900 text-sm font-medium max-md:max-w-full">
                            Gael Harry
                          </div>
                          <div className="text-zinc-700 text-xs max-md:max-w-full">
                            New York Finest Fruits
                          </div>
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-3 p-4 rounded-2xl max-md:max-w-full max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src={Jenna}
                       className="aspect-square object-contain object-center w-8 justify-center items-center shrink-0 my-auto rounded-full"
                        />
                        <div className="justify-center items-stretch flex flex-col tracking-tight flex-1 max-md:max-w-full">
                          <div className="text-neutral-900 text-sm font-medium max-md:max-w-full">
                            Jenna Sullivan
                          </div>
                          <div className="text-zinc-700 text-xs max-md:max-w-full">
                            Walmart
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-stretch flex gap-1 ml-6 mt-4 self-start max-md:ml-2.5">
                      <div className="text-yellow-900 text-sm tracking-tight grow whitespace-nowrap">
                        All customers
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a19de1de8fd5a7a5e9e55a2ca0b13478563d04675d04421f200ce6d981e9126?"
                        className="aspect-square object-contain object-center w-3.5 shrink-0 self-start"
                      />
                    </div>
                  </div>
                </div>
  )
}

export default CustomerList
