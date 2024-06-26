import ButtonC from "../UI/ButtonC";
import TailInput from "./TailInput";
import TailSelect from "../11/TailSelect";
import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

//이 페이지는 페치를 위한 정보를 뽑아내는 페이지. 
export default function Frcst() {
  const navigate = useNavigate();
  const [ops, setOps] = useState([]); //getxy.json에서' 1단계'만 맵해서 가져온 강원도.경상도.등등.. 
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [area, setArea] = useState();

  const inRef = useRef(); //사용자가 선택하는 날짜 값
  const selRef = useRef(); //사용자가 선택하는 지역 값

  const handleArea = () => { //사용자가 선택할때마다 달라지는값임 그래서 handleArea 안에 let tm 해줘야함
    //그래야 selRef=사용자선택값 에 따라서 tm이 다르게 설정될수있게 하기 위해 .. 
    //selRef가 뭔지에 따라서 tm도 달라지고 tm에 따라서 X.Y값도 달라지므로 tm임시변수를 잡아서 그때그때 tm값이 달라지게.
    //사용자가 선택하는 값에 따라서만 필터해와서 tm을 잡고 그거에 의해서 바뀌는 변수를 지정해줌. 
    let tm = getxy.filter(item => item["1단계"] === selRef.current.value)
    tm = tm[0];
    console.log(tm)
    setX(tm["격자 X"]);
    setY(tm["격자 Y"]);
    setArea(selRef.current.value);
  }

//   handleUrl('단기') -에 의해 여기서의 gubun은 '단기' 또는 '초단기'라는 값을 가지며, 각각 단기 예보와 초단기 예보를 구분하기 위해서! 사용함
  const handleUrl = (gubun) => {
    if (!x || !y || !inRef.current.value) {
      alert('날짜와 지역을 선택하세요');
      return;
    }
    //버튼이 클릭되고나면 navigate이하로 이동합니다. 페치없습니데이
    //아래에 ${} 값을 다 달고 넘어갑니데이
    navigate(`/Frcstlt?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
  }

  useEffect(()=>{
    let tm = getxy.map(item=>item["1단계"])
    setOps(tm);
  },[]);

  useEffect(()=>{
    console.log("x=",x, 'y=',y, "area=",area)
  });

  return (
    <div className="w-full h-full flex flex-col
                        justify-start items-center">
      <h1 className="w-10/12 text-2xl font-bold 
                     flex justify-center items-center m-5">
        단기예보
      </h1>
      <div className="w-full flex justify-center items-center ">
        <div className="w-10/12 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
          <TailInput id="dt"
                      type="date"
                      inRef={inRef} />
          <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      // selRef-사용자가 선택할수있는 지역값들 
                      initText="--- 지역선택 ---"
                      handleChange={handleArea} />
          <ButtonC caption="초단기예보"
                    bcolor="sky"
                    handleClick={() => handleUrl('초단기')} />
          <ButtonC caption="단기예보"
                    bcolor="sky"
                    handleClick={() => handleUrl('단기')} />
                    {/* 버튼이 클릭될 때 '단기'라는 문자열을 전달하면서 함수를 실행함*/}
        </div>
      </div>
    </div>
  )
}
