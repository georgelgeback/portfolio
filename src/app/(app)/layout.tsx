"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Navbar from "../../components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatched rendering on initial hydration

  return (
    <>
      <div
        className={`
            text-left  
            mx-auto 
            p-8
            font-inter        
            leading-normal    
            font-normal      
            antialiased    
            min-h-screen     
            min-w-screen   
            items-top 
            w-full
            relative
          `}
      >
        <div className="absolute inset-0 -z-50 bg-white dark:bg-black"></div>
        <div className="object-left flex flex-row w-full relative z-40">
          <Navbar />
        </div>
        <div className="flex justify-center w-full ">
          <div className="text-center flex flex-col lg:w-1/3">
            <div className="flex flex-col gap-4 m-4 relative">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
