import {
 
  ChevronDownIcon,

} from "@heroicons/react/outline";



import {
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";
import React from 'react'
import Orange from '../images/Orange.webp'
import Image from '../images/person_img.jpg'
const Sidebar = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };
      return (
        <div className="max-w-[280px] items-stretch self-stretch bg-white flex flex-col rounded-2xl">
          <div className="justify-center flex w-full flex-col pl-6 pr-16 py-3.5 items-start">
            <div className="justify-center items-stretch flex gap-1.5 py-2">
              <div className="justify-center items-center flex aspect-[1.05] flex-col my-auto cursor-pointer">
                <img
                  loading="lazy"
                  src={Orange}

                  className="aspect-[1.05] object-contain object-center w-[21px] rounded-full"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53765354a320d793dc1aeade967e1d57834cd564c191db6c8d86a7207f6fc2f2?"
                className="aspect-[5] object-contain object-center w-[121px] shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="items-stretch flex w-full flex-col pt-2 pb-12 px-2 cursor-pointer">
            <div className="flex justify-center items-center border border-[color:var(--Light-Gray,#F1F1F1)] bg-white flex gap-2 p-2  rounded-3xl border-solid">
             
               
              <i class="fa-solid fa-magnifying-glass"></i>
              <input placeholder=' Search' className='outline-none' />
            
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-5 px-5 py-3 rounded-3xl hover:bg-orange ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1787ebe188d8d5a22c0d4108bc07b403118dccbdcb3861e47fe373a36bbf3de4?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Dashboard
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-2 px-5 py-3.5 rounded-3xl hover:bg-orange">
             
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
              <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform  ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader  className="text-neutral-900 text-sm leading-4 tracking-tight grow" onClick={() => handleOpen(2)} >
             
               <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eae0cc76c0b9b0e0cd089a4330f78291fb24f13e0ee93098d257205eead3bf2f?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              /> <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Customers
              </div>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="text-neutral-900 text-sm leading-4 tracking-tight grow">
              
                Current
              </ListItem>
              <ListItem className="text-neutral-900 text-sm leading-4 tracking-tight grow">
               
                New
              </ListItem>
              <ListItem className="text-neutral-900 text-sm leading-4 tracking-tight grow">
               
               Negotiating
             </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
              </div>
            </div>
            
            <div className="items-stretch flex justify-between gap-3 mt-2 px-5 py-3 rounded-3xl hover:bg-orange">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00501cb6d003b0c085517ed7efcd45631034f801597de039ef6b6bb88c01365?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow whitespace-nowrap">
                All reports
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-2 px-5 py-3 rounded-3xl hover:bg-orange">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d3ffa21c72e8b30fc51d772b6ce59b35a50b2a20b7908bea5f9f0ed14b638c?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Geography
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-2 px-5 py-3 rounded-3xl hover:bg-orange">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d15b9230e9ae973b41432fde4b55c74fc7ae9c59a3d4fc8a670fd9103cf1a71a?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Conversations
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-2 px-5 py-3 rounded-3xl hover:bg-orange">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a2c1768abb5f6ccd9a010880f2185ee9535d79961313f14f1d5b5f76b1f53e?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Deals
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-2 mb-36 px-5 py-3 rounded-3xl hover:bg-orange">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4f03d423c98514863f4f697c8f1125a2a8f451cc30117e82d9de220097f9ec?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Export
              </div>
            </div>
          </div>
          <div className="justify-end items-stretch flex w-full flex-col px-2 py-6 cursor-pointer">
            <div className="items-stretch flex justify-between gap-3 pl-5 pr-20 py-0.5">
             <img
  loading="lazy"
  src={Image}
  className="aspect-square object-contain object-center w-8 justify-center items-center shrink-0 my-auto rounded-full"
/>

              <div className="justify-center items-stretch flex flex-col flex-1">
                <div className="text-neutral-900 text-sm font-medium tracking-tight whitespace-nowrap">
                  Gustavo Xavier
                </div>
                <div className="text-neutral-900 text-xs leading-4 tracking-tight justify-center items-stretch bg-orange-300 mt-1 px-1.5 rounded-3xl">
                  Admin
                </div>
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 mt-3 px-5 py-3 rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be99f9292aa8f30300ada48f9bd16a26b18038269eef9940e9500f0c9a051c6?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-neutral-900 text-sm leading-4 tracking-tight grow">
                Settings
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-3 px-5 py-3 rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4551f87f20ea46a5c40388f8fcc001f5a6c9170cedded3c0c0eb8dd100e229c?"
                className="aspect-square object-contain object-center w-4 shrink-0"
              />
              <div className="text-red-700 text-sm leading-4 tracking-tight grow whitespace-nowrap">
                Log out
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    
    



export default Sidebar
