import MyDiv3 from "./MyDiv3";

//probs를 매개변수로 dn1={dname1} 했던 것으로, dn1 자체를 변수로 가져와서 사용함
//probs 대신 속성에 적은 값 속성값을 그대로 변수로 가져온다 
export default function MyDiv2({dn1,dn2,dn3}) {
  return (
     <div className="flex flex-col items-center justify-center p-5 m-10 w-3/4 h-3/4 bg-lime-600 text-white">
          {`${dn1} > ${dn2}`}
          <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
     </div>
  )
}

