import { useState, useEffect } from "react";
import ButtonC from '../UI/ButtonC';

export default function TrafficMain() {
  const [tdata, setTdata] = useState([]);//전체 fetch받은데이터를말함
  const [c1, setC1 ] = useState();      //대분류만 잡아주기 - 버튼이랑다르다는거!
  const [c1Tag, setC1Tag] = useState(); //대분류 버튼
  const [c1Sel, setC1Sel] = useState(); //클릭되어 선택된 대분류!!!!(중분류값 달라지게 하기위하여)

  const [c2, setC2 ] = useState();      //중분류만 잡아주기 - 버튼이랑다르다는거!
  const [c2Tag, setC2Tag] = useState(); //중분류 버튼
  const [c2Sel, setC2Sel] = useState(); //선택된 중분류
  
  const [info, setInfo] = useState();

  const handleC1Select = (item) => {
    setC1Sel(item);
  }

  const handleC2Select = (item) => {
    setC2Sel(item);
  }

// url받아서 패치 가지고 와서 json형태로 변형해주고, data라고 되어있는 오브젝트배열을 data만으로 묶어준게 보이도록 
  const getFetchData = (url) => {
    fetch(url)
      .then(resp=> resp.json())
      .then(data=> setTdata(data.data));
      // .catch(err=> console.log(err));
  }

  // useEffect-1. 화면변경 즉 state변수가 변경되면 무조건실행 {};
  // useEffect-2. 컴포넌트생성시 맨처음 한번실행 {},[] ;
  useEffect (()=>{
      let url ='https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?' 
      url = `${url}page=1&perPage=17&returnType=json`;
      url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
      //api키를 가져올때는 그냥env가 아닌 process.env
    console.log(url)
    getFetchData(url);
  },[]) ;

  // useEffect-3. [tdata] useState변수가 변경되면 {이걸로실행}
  useEffect (()=>{
    if(tdata.length=== 0) return ;
    // tm은 대분류만 빼내서 array로 만든변수 
    console.log("tdata=", tdata);
    let tm = tdata.map(item => item['사고유형_대분류'])
    tm = [...new Set(tm)] ;
    //tm을 받아서 setC1은 c1변수 값이 달라짐 - useState 변수 값이 달라지게 하는 과정!!
    //tm은 차대사람 차대차 차량단독 철길건널목 이고 이거를 인수로 넣어서 state변수인 c1이 달라지게  정해준다고 
    setC1(tm);
  },[tdata]);


  //대분류 생성후. c1이 만들어지고 나야 c1Tag가 된다는걸 이해하기 그래야 이 안에 적어준다는거
  //c1 값이 할당이 되고 난 후 버튼에 표시가되도록 다시 잡아준다는걸 이해하기
  useEffect (()=>{
    if(!c1) return;
    console.log("c1=", c1);

    let tm =c1.map((item)=><ButtonC caption={item}
                                    key = {item}
                                    bcolor='sky'
                                    handleClick={()=>handleC1Select(item)}/>)
    setC1Tag(tm);
  },[c1]);
  
  //대분류가 선택된 후인데,useState변수인 [c1Sel] 이게 바뀔때마다  {이걸로실행}
  useEffect(()=>{
    console.log("대분류선택:", c1Sel)
    let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel)
                  .map(item =>item['사고유형_중분류']);
    setC2(tm); 
  },[c1Sel]);
  
  //중분류가 만들어졌을 때 
  useEffect(()=>{
    if (!c2) return;
    let tm =c2.map((item)=><ButtonC caption={item}
                                    key = {item}
                                    bcolor='sky'
                                    handleClick={()=>handleC2Select(item)}/>)
    setC2Tag(tm)
    // // if문을 통하여 c2가 없을경우의 return을 해주어야 오류가 안남***
  },[c2]);

  useEffect(()=>{
    console.log("대분류선택:", c1Sel)
    console.log("중분류선택:", c2Sel)
    let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel &&
                                  item['사고유형_중분류']===c2Sel);
    tm = tm[0];
    // object로 풀리게하는거
    setInfo(tm['사고건수'])

  },[c2Sel]);

  return (
    <div className="w-10/12 h-full flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center my-10 p-2">
        <div className="w-1/4 justify-start items-center">교통사고 대분류</div>
        <div className="w-3/4 flex">
          {c1Tag}
        </div>
      </div>
      <div className="w-full flex justify-between items-center my-10 p-2">
        <div className="w-1/4 justify-start items-center">교통사고 중분류</div>
        <div className="w-3/4 flex">
          {c2Tag}
        </div>
      <div className="w-full flex justify-between items-center my-10 p-2">
          {parseInt(info).toLocaleString()}
      </div>
      </div>
    </div>
  )
}
