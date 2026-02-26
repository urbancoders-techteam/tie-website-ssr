"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load modal to avoid SSR issues
const RegistrationModal = dynamic(() => import("./RegistrationModal"), {
  ssr: false,
 
});

interface MyComponentProps {
  text?: string;
}

const ModalTrigger = ({text}: MyComponentProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="mt-12 w-full ">
        <button
          onClick={handleOpen}
          aria-label="Open registration modal"
          className="bg-[#00999e] cursor-pointer hover:bg-[#007a7a] text-white font-semibold py-2 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00999e]"
        >
          {text || 'Register Now'}
        </button>
      </div>

      {open && <RegistrationModal open={open} onClose={handleClose} />}
    </>
  );
};

export default ModalTrigger;
