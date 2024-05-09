import Box from "./Box.json";
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState, useEffect } from "react";

export default function BoxOffice() {
     //자세히 집어와서 배열로 만들어주고 다시 맵으로 필요한거만 뽑아서 배열만들기 
     //dailyList는 배열로 했을때 몇번째껄로씩 변해야 하기 때문에 useState를 사용해줌 
     const [dailyList, setDailyList] = useState([]);
     //선택을 했을때 영화정보가 바뀌어야하는데 그거를 변수로 잡아준거임 selMv
     //그 dailyList라는 배열 변할때마다 하나 자체를 selMv라고 변수 잡아주는거
     const [selMv, setSelMv] = useState();

   // useEffect- 컴포넌트가 마운트될 때와 데이터 상태가 변경될 때마다 실행됩니다.
    // 외부 데이터를 불러와서 상태를 업데이트하는 비동기 작업을 수행합니다.
    //호출하지 않아도 리액트가 제어하는 함수인 useEffect 
    //useEffect를 씀으로써 컴포넌트 마운트 될 때 저기에서 뽑아가지고 나만의 리스트로 만든다!!
  useEffect (()=>{
    setDailyList(Box.boxOfficeResult.dailyBoxOfficeList);
  },[]); // []빈 배열-컴포넌트 마운트 될 때'한 번만' 실행되도록 설정합니다.
        //const 안쓰고 쓰는거라고 생각하면됨! 데일리리스트를 셋팅하기위한 함수(받아서 볼 인자가 어떤건지)

  useEffect (()=>{
    setSelMv(dailyList[0]); //데일리리스트 배열을 전달하여, 배열0번째거를 디폴트로 setSelMv함수에 의해 selMv로 하겠다. 
  },[dailyList]); //dailyList를 배열로 전달함으로서, [dailyList] 가 변경될 때만 setSelMv가 새로 셋팅되도록 한다.

  return (
      <div className="w-11/12 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full flex flex-col ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <BoxOfficeThead /> 
              {/* body에서는 selMv가 보여지는게 아니고 핸들클릭을 하면 setSelMv를 실행하는것까지 되어야해서 */}
              <BoxOfficeTbody dailyList={dailyList} setSelMv = {setSelMv} />
          </table>
          {/* 그리고 보여지는거를 하는건 info 이부분이라서, 여기는 함수가 아닌 변수만 나와야함 */}
          {selMv && <BoxOfficeInfo selMv={selMv} />}
        </div>
      </div>
  )
}
