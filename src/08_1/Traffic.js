import TrafficNav from "./TrafficNav";
import { useState , useEffect } from "react";


export default function Traffic() {
  const [tdata,setTdata] = useState();  //fetch데이터 즉 전체데이터를 말하는거임

  const [c1, setC1] = useState() ;      //대분류 데이터
  const [selC1, setSelC1] = useState(); //내가 선택하는거에 따라서 달라지는, 선택된 대분류 값을 말하는거

  const [c2, setC2] = useState();         //중분류 데이터
  const [selC2, setSelC2] = useState();

  const [info, setInfo] = useState(); //상세 정보

  //useEffect에서 호출한 api를 데이터로 가져와서 tdata(state변수)에 저장하는 과정.
  const getFetchData = (a) => {
    fetch(a) //겟페치데이터 안에 페치를 사용해서 url에 get요청을 보내는거임
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err=>console.log(err));
      // 프로그램 내 계속 쓸거라서 tdata에 저장할건데 tdata는 state변수라서 data로 써주는거임
  }

  //컴포넌트처음 렌더링될떄(api요청이 최초로 필요하니까)
  //useEffect 사용해서 api 호출하는거. 최초로 한번만 하면되니까 []임
  useEffect (()=>{
    let url ='https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?' 
    url = `${url}page=1&perPage=17&returnType=json`;
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
    console.log(url)
    getFetchData(url);
    //렌더링될때-> getFetchData에 url을 넘겨주어야 위에서 매개변수 a로 받을수있다!!
  },[])

 //tdata가 변경될때마다 실행되는거
  useEffect(()=>{
    if(!tdata) return; //tdata가 false면 종료하는걸로 함수를 작성해준다 이거를 안쓰면
    //tdata 값이 있든지 없든지 계속 undefined로 나오게됨. 이걸써야 콘솔에 undefined가 없어짐
    console.log(tdata)
    
    let tm=tdata.map(item=>item['사고유형_대분류']) //이렇게만 하면 17개가 나오는 상태이므로
    tm = [...new Set(tm)];  //set으로 중복제거를 해주고 ...풀어서 [array]로 만들어줘야한다는거 
    setC1(tm);      //이 배열을 setC1에 넣어줘야 c1값이 만들어질수있다. 
  },[tdata]);

  //대분류가 생성이 된 후
  useEffect (()=>{
    if(!tdata || !c1) return;
    console.log("c1=",c1)
  },[c1]);

  //대분류를 선택하면 => 중분류인 c2 가 생성이 되어야 한다.
  useEffect(()=>{
    if(!tdata || !c1 || !selC1) return;
    //이중 하나라도 비어있으면 종료
    console.log(selC1)
    //내가 선택하는 selC1이랑 대분류가 같은 거만 필터링해서 중분류로 뱉어주기
    //배열(tdata)의 각 요소(item)에서 '사고유형_대분류'라는 속성값만 가져오고, 그중에 selc1이라는 내가
    //고르는 값과 같은지 비교하여 일치하는 요소만 골라낸다 새로운 배열. 
    //그리고 이 새로운 배열 중에서 '중분류'값만 다시 추출하여 c2 상태에 저장하는 가임.
    let tm=tdata.filter(item => item['사고유형_대분류'] === selC1) //===를 통해서 자료 내용이 일치하는지!
                .map(item=> item['사고유형_중분류'])
    
    setC2(tm);
  },[selC1]);

  useEffect(()=>{
    if(!tdata || !c1 || !selC1 || !selC2) return;
    //하나라도 ! = FALSE(빈 값) 이면조건문실행=RETURN=종료 즉
    //모든값이 있을때 {} 바디를 실행한다 
    console.log("대분류",selC1, "중분류", selC2)
    let tm=tdata.filter(item => item['사고유형_대분류'] === selC1 &&
                                item['사고유형_중분류'] === selC2);

    console.log("상세1",tm)                            
    tm = tm[0]; //tm은 배열상태여서 배열상태만 가지고는 데이터를 뽑아올수가 없기때문에 tm[0] 이렇게 인덱스 하나를 골라줘야된다 
    console.log("상세2",tm)
    const infokey = ['사고건수','사망자수','중상자수', '경상자수','부상신고자수'];
    tm = infokey.map(item => <div key={item}
                                  className="flex flex-col "> 
                                <div className="flex justify-center items-center h-10 bg-gray-400 font-bold text-white">
                                  {item}
                                </div>
                                <div className="flex justify-center items-center h-10 bg-gray-200 font-semibold">
                                  {parseInt(tm[item]).toLocaleString()}
                                </div>
                              </div>);
    setInfo(tm);
  },[selC2]);

  return (
     <div className="w-full h-full flex flex-col justify-start items-center">
        <div className="w-full flex justify-start items-start">
          {c1 && <TrafficNav 
                              title='대분류'
                              c={c1}
                              sel={selC1}
                              setSel ={setSelC1} />}
        </div>
        <div className="w-full flex justify-start items-start">
          {c2 && <TrafficNav 
                                title='중분류'
                                c={c2}
                                sel={selC2}
                                setSel ={setSelC2} />}
        </div>
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
               {info}
        </div>
     </div>
  )
}
