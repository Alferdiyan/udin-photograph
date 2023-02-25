import Image from 'next/image';
import React from 'react';
import images from '../../constants/images';

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-slate-300 text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <h1 className="mb-10 text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose uppercase text-center">Gallery</h1>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.Couple} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.Mount2} />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.PhotoSmile} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.Portrait} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.Wisuda} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.WisudaIjazah} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.beautylight} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.PersonalPhoto1} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" width={720} height={480} src={images.PersonalPhoto2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
