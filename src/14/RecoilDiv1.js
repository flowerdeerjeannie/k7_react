import { AtomN, AtomN2 } from "./AtomN.js"
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";
import RecoilDiv2 from "./RecoilDiv2";

export default function RecoilDiv1() {
     const [n,setN] = useRecoilState(AtomN);
     const n2 = useRecoilValue(AtomN2);
     //n 값만 가져오므로 recoilValue를 가져온다.
     //setN으로 n을 업데이트하는 일을 할거면 state
     //useRecoilState: useState와 유사하게 상태와 상태를 업데이트하는 함수를 반환합니다.
     //useRecoilValue: 상태의 값을 읽기만 할 때 사용합니다.

     //setN은 어쩌구다 가 아니고 useEffect 안에 set~ 을 넣어서
     //컴포넌트가 실행될때 또는 []가 바뀔때마다 이 함수실행이 일어나도록 한다.
     useEffect (() => {
          setN(parseInt(localStorage.getItem("n")))
     },[]);
     //useEffect-컴포넌트 마운트 될때 localstorage에 저장된 n 값을 읽어와
     //int로 반환하여. setN호출로 n값을 설정함.
     //어플이 새로고침될때에도 로컬에 저장된 값을 사용할수있다.
     
     
     // n 상태가 변경될 때마다 localStorage에 값을 저장
     // useEffect(() => {
     //      localStorage.setItem("n", n);
     // }, [n]);


  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
      RecoilDiv1 : n = {n}
     <div>
      </div>
      <RecoilDiv2 />
    </div>
  )
}
