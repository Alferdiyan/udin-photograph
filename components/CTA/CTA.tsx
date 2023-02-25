import React from 'react';

export default function CTA() {
  return (
    <div className="py-5 h-32 bg-gray-200">
      <div className="flex items-center justify-between  px-4 md:px-16">
        <div className="w-3/5 lg:mb-0">
          <h1 className="text-xl font-bold">
            Cari jasa Foto Pernikahan ? atau jasa cinematografi?
            <br />
          </h1>
          <h1 className="text-blue-600 text-xl font-bold">Hubungi Kami</h1>
        </div>
        <div className="mb-6 md:mb-0  ">
          <div className=" md:flex flex-row">
            <a href="#" className="bg-transparent hover:bg-yellow-300 text-black font-semibold hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Booking Sekarang -{'>'}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
