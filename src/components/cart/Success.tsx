

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Success: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen">
    

      <main className="flex-1 grid place-items-center px-4 py-10 sm:py-16 gap-6">
        <Image
          src={'/images/ordersuccess.png'}
          alt="Order Success"
          width={100}
          height={100}
          className="w-[190px] h-auto"
        />
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
          Your Order has been accepted
        </h1>
        <p className="text-center text-gray-600 max-w-xs">
          Someone from our team will call you back
        </p>
        <Link
          href={'/'}
          className="bg-teal-600 hover:bg-teal-600 text-white font-medium py-2 px-6 w-full max-w-sm rounded transition"
        >
          Back To Home
        </Link>
      </main>

    </div>
  );
};

export default Success;
