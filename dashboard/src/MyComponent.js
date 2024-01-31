import React from 'react'
import Sidebar from './component/Sidebar';
import Statistics from './component/Statistics';
import CustomerList from './component/CustomerList';
import AreaChart from './component/AreaChart';
import Crish from "./images/crish.jpeg"
import Harry from "./images/harry.webp"
import Jenna from "./images/jenna.webp"
import Maggie from "./images/maggie.jpeg"

const MyComponent = () => {
  return (

    <div className="bg-stone-100 p-4 rounded-[32px]">
      <div className="gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar />
        <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-8">
            <div className="max-md:max-w-full">
              <Statistics />
            </div>
            <div className="mt-4 max-md:max-w-full">
              <div className="gap-1 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <CustomerList />
                <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                  <AreaChart />
                </div>
              </div>
            </div>
            <div className="mt-4 max-md:max-w-full">
              <div className="gap-1 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
                  <div className="items-stretch self-stretch bg-white flex w-full grow flex-col mx-auto pt-6 pb-11 px-6 rounded-2xl max-md:mt-4 max-md:px-5">
                    <div className="text-neutral-900 text-xl font-semibold tracking-normal">
                      Chats
                    </div>
                    <div className="text-zinc-700 text-sm tracking-tight mt-2">
                      2 unread messages
                    </div>
                    <div className="items-stretch content-center flex-wrap flex justify-between gap-2 mt-6 pr-9 max-md:pr-5">
                      <div className="items-center bg-orange-50 flex aspect-square flex-col justify-center w-14 h-14 px-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src={Crish}
                          className="aspect-square rounded-full object-contain object-center w-full justify-center items-center"
                        />
                      </div>
                      <div className="items-center bg-orange-50 flex aspect-square flex-col justify-center w-14 h-14 px-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src={Harry}
                          className="aspect-square rounded-full object-contain object-center w-full justify-center items-center"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src={Jenna}
                        className="aspect-square rounded-full object-contain object-center w-8 justify-center items-center shrink-0 my-auto"
                      />
                      <img
                        loading="lazy"
                        src={Maggie}
                        className="aspect-square rounded-full object-contain object-center w-8 justify-center items-center shrink-0 my-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch self-stretch bg-white flex w-full grow flex-col text-neutral-900 mx-auto pt-6 px-6 rounded-2xl max-md:mt-4 max-md:px-5 gap-3">

                    <div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700 h-8 flex items-start">
                      <div class="bg-yellow-300 text-xs font-medium text-black-100 text-center p-2 flex items-center leading-none rounded-lg h-8 w-full" > NY</div>
                    </div>

                    <div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700 h-8">
                      <div class="bg-yellow-300 text-xs font-medium text-black-100 flex items-center p-2 leading-none rounded-lg h-8 w-full" > MA</div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700 h-8">
                      <div class="bg-yellow-300 text-xs font-medium text-black-100 flex items-center p-2 leading-none rounded-lg h-8 w-full" > NH</div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-lg dark:bg-gray-700 h-8">
                      <div class="bg-yellow-300 text-xs font-medium text-black-100 flex items-center p-2 leading-none rounded-lg h-8 w-full" > OR</div>
                    </div>
                  </div>
                </div>



                <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch self-stretch bg-white flex grow flex-col w-full pt-6 px-6 rounded-2xl max-md:max-w-full max-md:mt-4 max-md:px-5">
                    <div className="text-neutral-900 text-xl font-semibold tracking-normal">
                      New deals
                    </div>
                    <div className="flex items-stretch justify-between gap-1 mt-6 max-md:mr-1">
                      <div className="justify-between items-stretch bg-orange-50 flex gap-2 p-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4219cac92fcf2db058270e1848e7de5bde65403b0f63a695adc3628a3a90c319?"
                          className="aspect-square object-contain object-center w-6 shrink-0"
                        />
                        <div className="text-yellow-900 text-sm tracking-tight grow my-auto">
                          Fruit2Go
                        </div>
                      </div>
                      <div className="justify-between items-stretch bg-orange-50 flex gap-1 p-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4219cac92fcf2db058270e1848e7de5bde65403b0f63a695adc3628a3a90c319?"
                          className="aspect-square object-contain object-center w-6 shrink-0"
                        />
                        <div className="text-yellow-900 text-sm tracking-tight grow whitespace-nowrap my-auto">
                          Marshall's MKT
                        </div>
                      </div>{" "}
                      <div className="justify-between items-stretch bg-orange-50 flex gap-1 p-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4219cac92fcf2db058270e1848e7de5bde65403b0f63a695adc3628a3a90c319?"
                          className="aspect-square object-contain object-center w-6 shrink-0"
                        />{" "}
                        <div className="text-yellow-900 text-sm tracking-tight my-auto">
                          CCNT
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-stretch justify-between gap-1 mt-2 max-md:mr-1">
                      <div className="justify-between items-stretch bg-orange-50 flex gap-2 px-3.5 py-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4219cac92fcf2db058270e1848e7de5bde65403b0f63a695adc3628a3a90c319?"
                          className="aspect-square object-contain object-center w-6 shrink-0"
                        />{" "}
                        <div className="text-yellow-900 text-sm tracking-tight grow whitespace-nowrap my-auto">
                          Joana Mini-market
                        </div>
                      </div>{" "}
                      <div className="justify-between items-stretch bg-orange-50 flex gap-1 px-3.5 py-3 rounded-2xl">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4219cac92fcf2db058270e1848e7de5bde65403b0f63a695adc3628a3a90c319?"
                          className="aspect-square object-contain object-center w-6 shrink-0"
                        />{" "}
                        <div className="text-yellow-900 text-sm tracking-tight grow whitespace-nowrap my-auto">
                          Little Brazil Vegan
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-stretch justify-between gap-2 mt-2 max-md:mr-2.5">
                      <div className="justify-center items-center bg-orange-50 flex w-[102px] shrink-0 h-3 flex-col rounded-2xl" />{" "}
                      <div className="justify-center items-center bg-orange-50 flex w-[148px] shrink-0 h-3 flex-col rounded-2xl" />{" "}
                      <div className="justify-center items-center bg-orange-50 flex w-[117px] shrink-0 h-3 flex-col rounded-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MyComponent
