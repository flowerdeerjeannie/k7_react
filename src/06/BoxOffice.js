import Box from "./Box.json";
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState, useEffect, useRef } from "react";

export default function BoxOffice() {

  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const selDate = useRef(); //했으면 밑에 인풋 타입에 ref={selDate}로 연결시켜주면됨
  //selDate = ref변수, 선택되는 날짜
  //자세히 집어와서 배열로 만들어주고 다시 맵으로 필요한거만 뽑아서 배열만들기 
  //dailyList는 배열로 했을때 몇번째껄로씩 변해야 하기 때문에 useState를 사용해줌 
  //선택을 했을때 영화정보가 바뀌어야하는데 그거를 변수로 잡아준거임 selMv

  //그 dailyList라는 배열 변할때마다 하나 자체를 selMv라고 변수 잡아주는거
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err=>console.log(err));
  }
  
  //날짜가 선택되었을때, input에서 onchange 때의 변화되는 부분 함수작성
  const handleSelect = (e)=>{
    e.preventDefault();
    console.log(selDate.current.value) ; //그냥 (selDate)하면 안되고 ref는 current.value 붙여야 값이나온다는거
  
   /* 데이터 가지고 있는 주소
   https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
   */
    let url=`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = url + `key=${process.env.REACT_APP_MV_KEY}`;
    url = url + `&targetDt=${selDate.current.value.replaceAll('-','')}` ; //콘솔창에 보면 2024-5-11 이런식으로 나오기때문에 -를 없애줘야함//없앨때 del이 아니고 replaceAll 해서 -를 공백으로해야 url형식이랑 맞춰져서 그날짜 데이터가 펫치 가져와짐
    console.log(url)
    getFetchData(url);
  }


  //호출하지 않아도 리액트가 제어하는 함수인 useEffect 
  //useEffect를 씀으로써 컴포넌트 마운트 될 때 저기에서 뽑아가지고 나만의 리스트로 만든다!!
  // useEffect(() => {
  //   setDailyList(Box.boxOfficeResult.dailyBoxOfficeList);
  // }, []);
   // []빈 배열-컴포넌트 마운트 될 때'한 번만' 실행되도록 설정합니다.
  //const 안쓰고 쓰는거라고 생각하면됨! 데일리리스트를 셋팅하기위한 함수(받아서 볼 인자가 어떤건지)

  useEffect(() => {
    setSelMv(dailyList[0]); //데일리리스트 배열을 전달하여, 배열0번째거를 디폴트로 setSelMv함수에 의해 selMv로 하겠다. 
  }, [dailyList]); //dailyList를 배열로 전달함으로서, [dailyList] 가 변경될 때만 setSelMv가 새로 셋팅되도록 한다.

  return (
    <div className="w-11/12 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="w-full flex flex-col justify-start items-center">
        <form className="w-full m-2 p-2">
        <div className="flex items-center justify-end">
          <label htmlFor="dateId" className="mx-5"> 날짜선택 </label>
          <input type="date"
                  id="dateId"
                  ref={selDate}
                  onChange={handleSelect}
          className="items-center justify-center w-1/5 h-1/5 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5" />
        </div>
        </form>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <BoxOfficeThead />
          {/* body에서는 selMv가 보여지는게 아니고 핸들클릭을 하면 setSelMv를 실행하는것까지 되어야해서 */}
          <BoxOfficeTbody dailyList={dailyList} setSelMv={setSelMv} />
        </table>
        {/* 그리고 보여지는거를 하는건 info 이부분이라서, 여기는 함수가 아닌 변수만 나와야함 */}
        {selMv && <BoxOfficeInfo selMv={selMv} />}
      </div>
    </div>
  )
}
