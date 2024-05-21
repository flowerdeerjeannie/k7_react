import { useSearchParams, useLocation } from "react-router-dom"


export default function RoutePage2() {
     const fruits = [ '🍌', '🍓'];

     const loc = useLocation();
     console.log(loc.pathname, loc.search);

     const [sParams] = useSearchParams() ;
     
     //빈배열 설정해놓고
     //sPramas = item1,item2...등등 이거를forEach로 각각 다 돌아서 배열을 채워주고
     //이 배열을 return문에서 변수로 사용해주며 join()해서 한 줄에 나오게 해줌 
     //forEach는 결과가 반환되지않는 반복문일때 사용함 (결과가 반환되는 map과 다른점)
     let tm = [];
     sParams.forEach(item=> fruits.includes(item) 
                              ? tm.push(<li key={item}>{`${item} : 과일`}</li>)
                              : tm.push(<li key={item}>{`${item} : 과일 아님`}</li>) 
                     ) 
                    //  li를 사용할때는 위와같이 key값주어야가능 

     return (
          <div className="w-full flex flex-col justify-center items-center text-xl m-2 p-2">
               <h2 className="w-full flex flex-col text-xl font-bold bg-slate-100 justify-center items-center p-2 m-2">
                    RoutePage2 </h2>
               <div className="grid">
                    <ul>
                    {tm}
                    </ul> 
                    {/* li형식 아닐때는 {tm.join()이었으나 ul사이에 끼우고는 위와같이 변경함} */}
               </div>
          </div>
     )

}
