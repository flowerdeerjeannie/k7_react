import { Link } from "react-router-dom"

export default function RouteHome() {
  return (
    <div className="flex flex-col justify-center items-center">
     <h1 className="text-2xl font-bold">
          RouteHome
     </h1> 
     <div className="w-full grid grid-cols-2 m-10">
          <div className="w-full flex flex-col justify-center items-center text-xl m-2 p-2">
               <h2 className="w-full flex flex-col text-xl font-bold bg-slate-100 justify-center items-center p-2 m-2">
                    Page1</h2>
                    <ul> 
                         {/* 방법1-useParams이용, p1/🍓를 통해서 넘어갈때 이걸 주소창에 들고가는거야 */} 
                         <li><Link to='/p1/🍋'> 레몬 🍋</Link></li>
                         <li><Link to='/p1/🍌'> 바나나 🍌</Link></li>
                         <li><Link to='/p1/🍓'> 딸기 🍓</Link></li>
                    </ul>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-xl  m-2 p-2">
               <h2 className="w-full text-xl font-bold bg-slate-100 flex justify-center items-center  m-2 p-2">
                    Page2</h2>
                    <ul> 
                         {/* 방법2 link to=하고 item=을 직접 여기 적어주는거야 */}
                         {/* <li><Link to='/p2?item=🍋'>레몬 🍋</Link></li>
                         <li> <Link to='/p2?item=🍌'>바나나 🍌</Link></li>
                         <li> <Link to='/p2?item=🍓'>딸기 🍓</Link></li> */}

                         {/* 이렇게 한줄로 적으면 ?이후가 싹다 sParams가 되는거임 */}
                         <li><Link to='/p2?item=🍋&item2=🍌&item3=🍓'>
                              레몬🍋, 바나나🍌, 딸기🍓
                              </Link></li>
                    </ul>
          </div>
     </div>
    </div>
  )
}
