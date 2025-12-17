'use client';
import Button from "@/Button";
import Image from "next/image";
import React, { MouseEvent, useRef, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const ipt = useRef<HTMLInputElement>(null);
  const handleSubmit = (e:React.FormEvent)=>{
     e.preventDefault();
     alert("submitted");
  }




  const handleClick = (e:MouseEvent)=>{
  alert( e.target);
  };
  return (
    <div>
      <h1>Welcome to Next.js with TypeScript!</h1>
      <Button text="Click Me" action={() => alert('Button Clicked!')} />
        <form action="" onSubmit={handleSubmit}>
          <input ref={ipt} type="text" placeholder="Enter something" />
          <button  type="submit">Submit</button> <br />
          <button onClick={handleClick}>sample</button>
        </form>
    </div>
  );
}
