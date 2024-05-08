import MyDiv2 from "./MyDiv2";
import MyDiv3 from "./MyDiv3";
import { useState } from "react";
//1.useState import하기

//probs는 사용자 정의태그, 내가 만든 다른 컴포넌트에게 값 전달해주기 위해 사용함 
export default function MyDiv(props) {
//2.state변수 선언, 변수[변수명, 이 변수를 변경시키는 함수 setN은 값바꿔주는 setter임]
  const [n, setN] = useState(0);
  //n이 변경되었다는걸 useState로 감지하게 하는거 , n의 초기값(0);
  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  //값이 변해야하는 변수일때는 let으로 잡아주기.

  //handlecount함수는 setN을 실행(변경)시킴
  const handleCount = () => {
    setN (n + 1);
  }

  return (
    <div className="flex justify-center items-center
                    flex-col p-5 m-10 w-2/3 h-2/3 bg-lime-900 text-white">
        <div className="flex items-center justify-end w-full p-3 m-3 border">
          <span className="inline-flex p-1 mx-1" onClick={handleCount}> 
            💗 
          </span>
          <span>
            {n}
          </span>
        </div>
        <div className="flex items-center justify-center w-full">
            {dname1}
        </div> 
        <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} />
    </div>
  )
}
