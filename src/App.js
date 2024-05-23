import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom"
//라우터를 위하여 위항목과 링크를 임포트해줌
import './App.css';
import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
import { IoHomeSharp } from "react-icons/io5";
// import logoimg from './logo.svg';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';
import TrafficNav from './08_1/TrafficNav';
import Traffic from './08_1/Traffic';
import MyRef from './09/MyRef';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
import Frcst from "./13/Frcst";
import FrcstList from "./13/FrcstList";
// import RouteMain from './12/RouteMain';

function App() {
     return (  
     <BrowserRouter>
          <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
          <header className='flex justify-between items-center text-xl font-bold h-20 px-20 py-10 bg-orange-400 text-purple-50'>
               <p className='text-2xl'>리액트 실습</p>
               <ul className="flex">
                    <li className="mr-4  hover:bg-orange-300 p-2">
                         {/* Link to=3000뒤의 주소 */}
                         <Link to='/MyClock'>시계</Link>
                    </li>
                    <li className="mr-4 hover:bg-orange-300 p-2">
                         <Link to='/Lotto'>로또</Link>
                    </li>
                    <li className="mr-4  hover:bg-orange-300 p-2">
                         <Link to='/BoxOffice'>박스오피스</Link>
                    </li>
                    <li className="mr-4  hover:bg-orange-300 p-2">
                         <Link to='/Gallery'>갤러리</Link>
                    </li>
                    <li className="mr-4  hover:bg-orange-300 p-2">
                         <Link to='/Traffic'>교통 통계</Link>
                    </li>
                    <li className="mr-4  hover:bg-orange-300 p-2">
                         <Link to='/Festival'>축제</Link>
                    </li>
                    <li className="mr-4  hover:bg-orange-300 p-2">
                         <Link to='/Frcst'>단기예보</Link>
                    </li>
               </ul>
               <p><IoHomeSharp className='text-3xl' /></p>
               </header>
                    <main className='grow flex justify-center items-center'>
                    {/* 메인 안에는 <루트 경로=주소, 엘레멘트={<>} 집어주기 */}
                    <Routes>
                         <Route path='/MyClock' element={<MyClock />} />
                         <Route path='/Lotto' element={<Lotto />} />
                         <Route path='/BoxOffice' element={<BoxOffice />} />
                         <Route path='/FoodMain' element={<FoodMain />} />
                         <Route path='/Gallery' element={<Gallery />} />
                         <Route path='/Traffic' element={<Traffic />} />
                         <Route path='/Festival' element={<Festival />} />
                         <Route path='/Frcst' element={<Frcst />} />
                         <Route path='/Frcstlt' element={<FrcstList />} />
                         {/* Frcst에서 다시 다른 컴포넌트를 불러올거라 하더라도 여기에 Route로 작성해주어야함
                         다른데서 작성하면 홈이 이 컴포넌트를 찾을수가없다. */}
                    </Routes>
                         {/* <div className='flex justify-center items-center w-1/4 h-1/2'> 
                              <img src={logoimg} alt='logo' />
                         </div> */}
                         {/* <MyDiv /> */}
                         {/* <MyList /> */}
                         {/* {<Lotto />} */}
                         {/* <BoxOffice /> */}
                         {/* < MyClock /> */}
                         {/* <FoodMain /> */}
                         {/* <TrafficMain /> */}
                         {/* <TrafficNav /> */}
                         {/* <Traffic /> */}
                         {/* <MyRef /> */}
                         {/* <Gallery /> */}
                         {/* <Festival /> */}
                    </main>
               <footer className='flex justify-center items-center h-20 bg-slate-600 text-purple-50'>
                    ⓒ 2024 Lee Jieun, All rights reserved.
               </footer>
          </div>
     </BrowserRouter>
     );
}

export default App;