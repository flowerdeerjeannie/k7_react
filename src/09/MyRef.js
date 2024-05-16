import { useEffect, useState, useRef } from "react";
import ButtonC from "../UI/ButtonC"

export default function MyRef() {
     let cVal = 0;  
     const [sVal, setSVal] = useState(0);
     const rVal = useRef(0);

     const x1 = useRef();
     const x2 = useRef();
     const x3 = useRef();

     const handleClickComp = () =>{
          cVal++;
          console.log("cVal=", cVal);
     }

     const handleClickState = () =>{
          setSVal(sVal +1);
     }

     const handleClickRef = () =>{
          rVal.current = rVal.current+1; 
          console.log("rVal=", rVal);
     }

     const handleClick = () => {
          if (!x1.current.value) {
               alert("값을 입력하세요...");
               x1.current.focus();
               return;
          }

          if (!x2.current.value) {
               alert("값을 입력하세요...");
               x2.current.focus();
               return;
          }

          console.log('x1=', x1.current.value);
          console.log('x2=', x2.current.value);
          x3.current.value=parseInt(x1.current.value)+parseInt(x2.current.value);
     }

     useEffect(()=>{
          console.log("sVal=", sVal)
     },[sVal])
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-20 p-5 m-5 font-bold text-xl ">
          <span> 컴포넌트 변수 : {cVal} </span>
          <span className="mx-5"> state 변수 : {sVal} </span>
          <span> ref 변수 : {rVal.current} </span>
      </div>
      <div>
          <span> <ButtonC caption="컴포넌트 변수"
                          bcolor={"sky"}
                          handleClick={handleClickComp} />
          </span>
          <span> <ButtonC caption="state 변수"
                          bcolor={"sky"}
                          handleClick={handleClickState} />
          </span>
          <span> <ButtonC caption="ref 변수"
                          bcolor={"sky"}
                          handleClick={handleClickRef} />
          </span>
      </div>
      <div className="grid grid-cols-5 gap-2 m-5">
          <input type='number' id='txt_1' ref={x1} //폼태그 classname에 ref={} 속성으로 끼워야된다.
          className="bg-gray-50 border border-gray-300 text-gray-900" />
          <span className="inline-flex justify-center items-center">+</span>
          <input type='number' id='txt_2' ref={x2}
          className="bg-gray-50 border border-gray-300 text-gray-900"/>
          <ButtonC caption=" = "
                          bcolor={"orange"}
                          handleClick={handleClick} />
          <input type='number' id='txt_3' ref={x3}
          className="bg-gray-50 border border-gray-300 text-gray-900"readOnly/>
      </div>

    </div>
  )
}
