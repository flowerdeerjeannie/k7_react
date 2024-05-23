import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom"
import TailSelect from "../11/TailSelect";
import userEvent from "@testing-library/user-event";
import getcode from "./getcode.json";
import { TbHttpOptions } from "react-icons/tb";

export default function FrcstList() {
  // navigate(`/Frcstlt?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
  
  // URL에서 쿼리 파라미터를 읽기 위해 useSearchParams 훅 사용
  const [sParams] = useSearchParams();


  // URL에서 각 파라미터 값을 가져옴. sParams.get('key')를 사용하여 각 파라미터 값을 가져오는거임
  //URL이 http://example.com/?gubun=단기&x=60&y=127&dt=20240523&area=서울일 때, 
  //sParams.get('gubun')은 '단기' 값을 반환합니다.
  //useEffect에서 사용하여 동적으로 제어하기 위하여 sParams에서 가져오는것
  const gubun = sParams.get('gubun');
  const x = sParams.get('x');
  const y = sParams.get('y');
  const dt = sParams.get('dt');
  const area = sParams.get('area');
  
  // 상태 변수와 레퍼런스를 선언
  const [tdata, setTdata] = useState();
  const [ops, setOps] = useState([]);
  const selRef = useRef();
  
  const handleSelect = () => {
    console.log(selRef.current.value)
    
  }

  const getFetchData = (url) => {
    fetch(url)
         .then(resp=>resp.json())
         .then(data=>setTdata(data.response.body.items.item))
         .catch(err=>console.log(err));
  }

  useEffect(()=>{
    let tm = getcode.filter(item => gubun==='단기' ? item["예보구분"]=== '단기예보'
                                                    : item["예보구분"] === '초단기예보')
                    .map(item => item["항목명"]);
    setOps(tm);
     
    // 'gubun' 파라미터에 따라 필터링된 항목명을 설정
    let url ;
    if (gubun==='초단기') {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?` ;
      url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000` ;
      url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`; 
    }
    else {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
      url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000`
      url = url + `&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
    } 
    getFetchData(url)

}, []);


  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-10/12 flex justify-center items-center">
        <h2>{gubun}예보</h2>
        <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      initText="--- 항목선택 ---"
                      handleChange={handleSelect} />
      </div>
    </div>
  )
}
