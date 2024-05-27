import { AtomN } from "./AtomN.js"
import { useRecoilState } from "recoil";
import ButtonC from "../UI/ButtonC"
import { useEffect } from "react";

export default function RecoilDiv3() {
     const [n, setN] = useRecoilState(AtomN);
     //setN까지 가져오기 위하여 value가 아닌
     //recoilState를 가져온다. n값만쓸거면 value인데 setN 재정의 위하여 

     const handleUP = () => {
         setN(n+1);
     }

     const handleDOWN = () => {
          setN(n-1);
     }

     const handlesave = ()=> {
          localStorage.setItem("n", n);
          //localStorage-웹 브라우저에 데이터를 저장하는 데 사용되는 웹 스토리지 메커니즘
     }

     const handleremove = () => {
          localStorage.removeItem("n");

          setN(0);
     }

  return (
     <div className="flex flex-col justify-center items-center text-2xl font-bold">
          <div>
          RecoilDiv3 : n3= {n}
          </div>
          <div>
               <ButtonC caption='증가'
                          bcolor='sky'
                           handleClick={handleUP} />
               <ButtonC caption='감소'
                          bcolor='sky'
                           handleClick={handleDOWN} />
               <ButtonC caption='Local 저장'
                          bcolor='sky'
                           handleClick={handlesave} />
               <ButtonC caption='Local 삭제'
                          bcolor='sky'
                           handleClick={handleremove} />

          </div>
    </div>
  )
}
