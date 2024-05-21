import { useParams } from "react-router-dom"

//Routemain에서 <Route path='/p1/:item' element={<RoutePage1 />} /> 썼자나 이거 파람으로서 item 받았으면
//그 item에 대해서 이 page1에서 풀어줘야지
export default function RoutePage1() {
     const item = useParams().item;
     const fruits = ['🍌', '🍓'];


     return (
          <div className="w-full flex flex-col justify-center items-center text-xl m-2 p-2">
               <h2 className="w-full flex flex-col text-xl font-bold bg-slate-100 justify-center items-center p-2 m-2">
                    RoutePage1 </h2>
               <div className="grid">
                    {fruits.includes(item) ? `${item}는 과일입니다.`
                                         : `${item}은 과일이 아닙니다.`}
               </div>
          </div>
     )



}

