import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Parent = () => {
  const childRef=useRef();
  const handleButtonClick=()=>{
    childRef.current.changeColor('bg-purple-700');
  }
  return (
    <div>
     <ChildComponent ref={childRef} initialColor="bg-red-600" ></ChildComponent>
     <button onClick={handleButtonClick}  >Invoke Child Methods</button>
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
    const {initialColor}=props;
    const containerRef=useRef(null);
    useImperativeHandle(ref,()=>({
      changeColor:(newColor)=>{
        containerRef.current.classList.replace(initialColor,newColor);
      }
    }),[])
    return (
        <div ref={containerRef} className={`${initialColor}`}>
          My Component
        </div>
      );
  });

export default Parent;
