import Image from 'next/image';
import React from 'react';
import images from '../../constants/images';

export default function AboutUs() {
  return (
    <div
      className="bg-slate-500 px-5 py-10 md:px-16"
      style={{
        backgroundImage: "url('/src/assets/BgNoise.png')",
      }}
    >
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image src={images.PersonalPhoto1} alt="about_img" width={180} className=" w-1/3 md:w-full border-8 border-slate-400 max-w-full h-auto rounded-full" />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-3/4 md:w-2/3 flex flex-wrap justify-center ">
              <h2 className=" text-yellow-300 tracking-loose text-3xl md:text-5xl uppercase flex justify-center">About Us</h2>
              <p>Kami adalah Jasa Foto profesional di Magelang, sampai saat ini melayani beberapa client.</p>
              <p>
                Layanan unggulan kami adalah fotografer pernikahan, jasa foto Wisuda, Jasa foto keluarga, jasa foto Traveling, jasa foto produk terdekat, jasa foto produk pakaian, jasa foto produk kosmetik, jasa foto produk makanan dan jasa
                foto produk onlineshop.
              </p>
              <p>Kami memiliki team profesional dibidangnya untuk menghasilkan karya-karya terbaik sesuai kebutuhan Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
