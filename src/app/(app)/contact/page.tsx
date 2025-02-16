"use client";

import React from "react";
import FadeInDown from "@/components/fadein";

export default function Page() {
  return (
    <>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">Contact me here</h1>
        <br />
        <p>
          Send me an email at <a href="mailto:EMAIL">EMAIL</a>! Or you can find
          me on the streets.
        </p>
      </FadeInDown>
    </>
  );
}
