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
import RouteMain from './12/RouteMain';

function App() {
     return (     //w-full한 후 mx-auto로 중간으로 가게 만들어줌
          <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
               <header className='flex justify-between itmes-center text-xl font-bold h-20 px-20 py-10 bg-orange-400  text-purple-50'>
                    <p className='text-2xl'>리액트 실습</p>
                    <p><IoHomeSharp className='text-3xl' /></p>
               </header>
                    <main className='grow flex justify-center items-center'>
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
                         {/* <RouteMain /> */}
                    </main>
               <footer className='flex justify-center items-center h-20 bg-slate-600 text-purple-50'>
                    ⓒ 2024 Lee Jieun, All rights reserved.
               </footer>
          </div>
     );
}


//1. import 시 끝에 export 해주어야 함
//2. App.js 이런 식으로 반드시 대문자로 시작함
//3. return이 반드시 있어야 하고, 그 안에 큰 className은 하나만 있어야함(자식노드는 ㄱㅊ)
//4. 태그.종료태그 같이쓸려면 < />
//5. Hello 컴포넌트를 몇 번씩 재사용 가능 

export default App;