
'use client';
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const list=["car1.jpg","car2.jpg","car3.jpg","car4.jpg","car5.jpg","car6.jpg"];

export default function Gallery(){
  const [open,setOpen]=useState(false);
  const [index,setIndex]=useState(0);

  return (
    <section id="gallery" className="mt-10">
      <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((img,i)=>(
          <button key={i} onClick={()=>{setIndex(i); setOpen(true)}} className="card overflow-hidden group">
            <div className="relative h-48">
              <Image src={`/images/${img}`} alt="car" fill style={{objectFit:"cover"}}/>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onClose={()=>setOpen(false)} className="fixed inset-0 z-50 p-4 bg-black/70">
        <div className="flex justify-center items-center min-h-screen">
          <Dialog.Panel className="max-w-4xl w-full">
            <div className="relative h-[70vh]">
              <Image src={`/images/${list[index]}`} alt="large" fill style={{objectFit:"contain"}}/>
            </div>
            <div className="mt-4 flex justify-between">
              <button onClick={()=>setIndex((index-1+list.length)%list.length)} className="px-4 py-2 border">Prev</button>
              <button onClick={()=>setOpen(false)} className="px-4 py-2 border">Close</button>
              <button onClick={()=>setIndex((index+1)%list.length)} className="px-4 py-2 border">Next</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
