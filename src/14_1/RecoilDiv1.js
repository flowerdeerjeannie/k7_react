import { useState,useEffect } from "react"
import RecoilDiv2 from "./RecoilDiv2";

export default function RecoilDiv1() {
  const [n, setN] = useState(0); //여기서 setN이란 n의 상태를 업데이트하는 함수
  const [n2, setN2] = useState();
  const [n3, setN3] = useState();

  //그냥 useEffect만 써서 [n]을 받고 setN2를 정의해주는거임 
  //setN을 여기서 지정해주지 않았어도 setN에 의해서 n이 정해진다 를 useState에 정의해 주었기 때문에
  //useEffect만 써서 [n]을 받고, setN2(n*2) 라고 쓰는 형식을 그냥..외워.. 
  //상태업뎃함수(어떻게상태업뎃)!!!

  useEffect (()=>{
     setN2(n * 2);
  },[n])

  useEffect (()=>{
     setN3(n *3);
  },[n])

//setN2를 여기에서 지정해주고 n2를 넘겨넘겨주면 다른 자식컴포넌트에서도 다
//따로 변수선언 없이 이 설명을 넘겨주는것만으로도 쓸수있게 되는거지
//넘긴걸 다른 컴포넌트에서 또 재정의하지 않는 이상은 이 정의를 계속 가지고 가는거임  

//나의의문- setN을 여기서 정의안해주느냐? 인데
//이 div1 는 위 useState(0);에 의해서 지금 n=0인 상태로 계속 가다가 
//div3에서 setN을 재정의해줌으로서 n의 값이 바뀔수있게 되는것임 
//setN을 어떻게 변화시키지 않는 이상은 굳이 여기서나 다른데서나 쓸 필요가 없음.. 
//실제로 setN을 컴포넌트 뒤에 뒤에 쓴거는, div3에서 쓸수있게 하기 위해서임 
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-bold">
      RecoilDiv1 : n ={n}
     <div>
      </div>
      <RecoilDiv2 num={n} setN={setN} n2={n2} n3={n3}/>
      {/* Recoil2에서 쓸 것들을 설명해주고, 여기서 설명했으니 앞부분만 넘기면 됨. */}
    </div>
  )
}
