import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom"
import TailSelect from "../11/TailSelect";
import userEvent from "@testing-library/user-event";
import getcode from "./getcode.json";

export default function FrcstList() {
  // navigate(`/Frcstlt?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
  
  //얘는 선택 후에 실제로 그려지는 테이블페이지.

  // URL에서 쿼리 파라미터를 읽기 위해 useSearchParams 훅 사용
  const [sParams] = useSearchParams();

  // URL에서 각 파라미터 값을 가져옴. sParams.get('key')를 사용하여 각 파라미터 값을 가져오는거임
  //URL이 http://example.com/?gubun=단기&x=60&y=127&dt=20240523&area=서울일 때, 
  //sParams.get('gubun')은 '단기' 값을 반환합니다.
  //useEffect에서 사용하여 동적으로 제어하기 위하여 sParams에서 가져오는것
  //sParams가 저 값을 다 가지고있는상태에서 뽑아내는거지 
  const gubun = sParams.get('gubun');
  const x = sParams.get('x');
  const y = sParams.get('y');
  const dt = sParams.get('dt');
  const area = sParams.get('area');
  
  // 상태 변수와 레퍼런스를 선언
  const [tdata, setTdata] = useState();
  const [ops, setOps] = useState([]); //항목명 만을 가져온게 ops
  const [selItem, setSelItem] = useState(); //selItem은 사용자가 선택한 항목의 정보를 담고 있는 객체!
                                            //handleSelect함수에서 정해지는거임 
  const [tags, setTags]=useState();
  
  const selRef = useRef();

  const sky = {"1" : '맑음', "3": '구름많음', "4":'흐림'}
  const pty = {"0":'없음', "1":'비', "2":'비/눈', "3":'눈', "4":'소나기', "5":'빗방울', "6":'빗방울눈날림', "7":'눈날림'}
  
  const handleSelect = () => {
    console.log(selRef.current.value)
    let tm=getcode.filter(item =>(gubun==='단기' ? item["예보구분"]=== '단기예보'
                                              : item["예보구분"] === '초단기예보') &&
                                              item["항목명"] === selRef.current.value );
    console.log("select item", tm)
    setSelItem(tm[0]); //을 통해서 tm[0]을 넣어주면 object가 저장되게됨 -> selItem을 정해줌. 
    //tm은 selRef 어떤값 선택하는지에따라 달라질수있는 순식간의 휙휙변수임 
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

}, []); //컴포넌트가 처음 랜더링될때 실행되는 useEffect

  useEffect(()=>{
    if (!selItem) return;
    console.log("selItem", selItem)

    let tm = tdata.filter(item => item['category'] === selItem['항목값'])
                  .map(item =>     
                  <tr key={`${item["fcstDate"]}${item["fcstTime"]}`}
                    className="bg-white-500 text-black w-full">
                    <td scope="col" className="px-6 py-3">{selItem["항목명"]}({item["category"]})</td>
                    <td scope="col" className="px-6 py-3">{item["fcstDate"]}</td>
                    <td scope="col" className="px-6 py-3">{item["fcstTime"]}</td>
                    <td scope="col" className="px-6 py-3">
                      {item["category"] === 'SKY' 
                                      ? sky[item["fcstValue"]]
                                      : item["category"] === 'PTY'
                                       ? pty[item["fcstValue"]]
                                       : `${item["fcstValue"]}${selItem["단위"]}`}
                    </td>
                  </tr>

                   );
    console.log("tdata filter", tm);
    setTags(tm);
  },[selItem]); //selItem이 변경될때마다 실행되는 effect

  useEffect(()=>{
    console.log(tdata)
  },[tdata]);


  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-10/12 flex justify-center items-center">
        <h2 className="text-xl font-bold">{gubun}예보-{area}({dt})</h2>
        <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      initText="--- 항목선택 ---"
                      handleChange={handleSelect} />
      </div>
      <table className=" m-10 w-11/12 text-sm text-left rtl:text-right text-gray-500">
          <thead className="w-full text-xs text-gray-900 uppercase bg-gray-50">
          <tr className="bg-gray-500 text-white w-full font-bold">
              <th scope="col" className="px-6 py-3">항목명</th>
              <th scope="col" className="px-6 py-3">예측일자</th>
              <th scope="col" className="px-6 py-3">예측시간</th>
              <th scope="col" className="px-6 py-3">항목값</th>
          </tr>
          </thead>
          <tbody>{tags}</tbody> 
      </table>
      </div>

  )
}
