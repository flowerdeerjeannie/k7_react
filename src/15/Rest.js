import { useEffect, useState, useRef } from "react";
import TailInput from "../13/TailInput";
import ButtonC from "../UI/ButtonC";

export default function Rest() {
     const [tdata, setTdata] = useState([]); //url의 데이터를 가지고 잡아오는 data내용 = tdata
     const [tags, setTags] = useState();
     const [isUpdate, setIsUpdate] = useState(false); //입력. 수정 버튼 체인징을 위해 만든아이라서 false값 주어져있음
     const [isUpdateId, setIsUpdateID] = useState(); //수정을 위하여 만든 새로입력하는 state

     const txt1ref = useRef();
     const txt2ref = useRef();

     const getFetchData = async (url) => {
          const resp = await fetch(url) ; //fetch를 사용하여 url을 가져오는데,  await 키워드를 사용하여 이 비동기 작업이 완료될 때까지 기다립니다.
          const data = await resp.json() ;  //가져온 url의 data를 JSON 형태로 파싱
          setTdata(data) //JSON 데이터를 tdata 상태로 설정
     } 
     //이 흐름에 의해서 data가 있으면 tdata설정되도록... 
     //tdata는 내가 잡은 변수지 data그자체랑 다르니까 꼭 data를 넣어서 tdata가 설정되도록 짚어준다. 
     
     //수정을 누르면 내가 누른 item이 선택되어 수정되도록.
     const jsonUpdate = async(item) => {
          console.log(item)

          txt1ref.current.value = item.title; // item.title값이 인풋안에 txt1ref로 보여질수있도록 한다. 
          txt2ref.current.value = item.author;
          setIsUpdate(true); //으로서 isupdate를 넣어줌으로써 TRUE FALSE를 정해서 입력이 됐다가 수정이 됐다가 하는 장치로 바까준다
          //isupdate 기본은 false 인데 - {isUpdate? '수정' :' 입력'}  기본값은 입력 인데, true 함으로서 '수정'으로 바뀌어진다. 
          setIsUpdateID(item.id); //내가 누른 id를 넣는다.
     }

     //삭제함수!
     const jsonDelete = async(id) =>{
          console.log(id)

          //삭제할 id의 url을 설정, id가 ${}로 들어가야해서 백틱사용함
          let url=`http://localhost:3005/posts/${id}`; 
          await fetch(url, { //url로 delete 요청을 보낸다.
               method : 'DELETE'
          }); //여기까지는 서버에서의 데이터 삭제 =! 이거는 화면에 나타나는 데이터 삭제랑 다른거지
          //딜리트인즉슨 tdata의 범위를 다시 설정해주는 의미이므로
          //url을 받아오고 setTdata를 건드려주는거임

          setTdata(tdata.filter(item=> item.id !== id)) //지금 새로운 'id'가 아닌 = 즉 제외한, item.id들을 가져와서 tdata화 하기
     }
     
     //수정되도록 하는 수정함수!
     const jsonUpdate2 = async() => {
          console.log("jsonupdate2", isUpdateId)

          const putData = {
               id : isUpdateId,
               title : txt1ref.current.value,
               author : txt2ref.current.value
          } //isUpdateId는 내가 수정하고자 하는 값. id는 

          let url = `http://localhost:3005/posts/${isUpdateId}`;
          const resp=await fetch(url, { //화면반영이아니고 db에 들어갈 내용의 제이슨에 들어가지도록
               method: 'PUT',
               headers: {'Content-Type':'application/json'},
               body: JSON.stringify(putData)
          });

          const data = await resp.json(); //json화되어 추가된데이터만을 말하는 data. 입력된그거하나자체

          console.log(data);      //isUpdateId = 내가 새로입력한거가 있을거니까 그것만 꼽아서 새로운 data 반환, 아니면 item.
                                   //id값 같은거중에서만 data, 아니면 원래 item을 반환하는 걸로 tdata 새로 구성되는꼴임.
          setTdata(tdata.map(item => item.id === isUpdateId ? data : item));
          txt1ref.current.value = ''; //값 창 clear 시키고
          txt2ref.current.value = ''; 
          setIsUpdate(false); //까지 해줘야 입력 버튼으로 돌아오고
          setIsUpdateID(''); //이것도 초기화
     }


     //handleOk 하면 jsonPost 실행, 그것인즉슨!
     //입력 버튼을 누르면 테이블에까지 추가되어 나오도록 하고싶다. 입력함수!
     const jsonPost = async() => {
          if (txt1ref.current.value === "") {
               alert('제목을 입력하세요.');
               txt1ref.current.focus()
               return;
          }

          if (txt2ref.current.value === "") {
               alert('작성자를 입력하세요.');
               txt2ref.current.focus()
               return;
          }

          const postData = {  //이렇게 제이슨 데이터를 만들어지도록 연결함
                              title:txt1ref.current.value,
                              author:txt2ref.current.value
                              }

          let url = 'http://localhost:3005/posts';
          const resp = await fetch(url, { //화면반영이아니고 db에 들어갈 내용의 제이슨에 들어가지도록
               method: 'POST',
               headers: {'Content-Type':'application/json'},
               body: JSON.stringify(postData)
          });

          const data = await resp.json(); //json화되어 추가된데이터만을 말하는 data. 입력된그거하나자체

          console.log(data);
          setTdata([...tdata, data]); //tdata에 그리고 새로 들어온 data를 추가하여 tdata로 넣는다!
          //...tdata는 기존 tdata 배열의 모든 요소를 복사, 에 새로운 data 항목을 추가하여 새로운 배열을 생성
          txt1ref.current.value = '';
          txt2ref.current.value = ''; //data 추가하고 나서는 인풋했던 값을 안남아있게 clear시키는것 
     }

     const handleOk = () => {
          if (isUpdate) jsonUpdate2();
          else jsonPost();
     }

     useEffect(()=>{
          if(!tdata) return; //tdata를 []로 잡았으면 이거 안써도됨 배열맞으니까 근데 useState(); 이걸로 빈거면 return써줘야됨
          let tm=tdata.map(item => <tr className="bg-transparent hover:bg-sky-300 text-blue-700 font-semibold
                                    hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded" key={item.id}>
                                   <td scope="col" className="px-6 py-3">{item['title']}</td>
                                   <td scope="col" className="px-6 py-3">{item["author"]}</td>
                                   <td scope="col" className="px-6 py-3"><a href='#' className="inline-flex hover:bg-red-500 hover:text-black" //삭제되게 하기 위해서 1.해당td에 a href를 걸어서 onClick 걸어주고
                                                                           onClick={()=>jsonDelete(item.id)}>
                                                                           [삭제]</a></td>
                                   <td scope="col" className="px-6 py-3"><a href='#' className="inline-flex hover:bg-yellow-300 hover:text-black" //
                                                                           onClick={()=>jsonUpdate(item)}>[수정]</a></td>
                                   </tr>)
          setTags(tm)
          //내 실수- setTags에 그냥 tdata 냅다 집어넣으면 안되고 그걸 골라오는 임시변수 만들어서 넣어줘야함.
     },[tdata]); //tdata가 바뀔때마다 달라지는것들을 effect안에 써주기

     useEffect (()=>{
          let url = 'http://localhost:3005/posts';
          getFetchData(url);
     },[]); //맨첨한번실행<-빈배열

     return (
     <div className="w-full flex flex-col justify-center items-center">
           <div className="flex items-center py-2">
               <div className="flex w-full">
               <label htmlFor="txt1" className="mx-5 p-2"> 제목 </label>
               <TailInput type='txt' id= 'txt1'
                    inRef={txt1ref} />
               <label htmlFor="txt2" className="mx-5 p-2 "> 작성자 </label>
               <TailInput type='txt' id= 'txt2'
                    inRef={txt2ref} />
               </div>
               <ButtonC caption={isUpdate? '수정' :' 입력'} //isUpdate를 false로 설정해두고, true면 입력 되도록.
                         bcolor='sky'
                         handleClick={handleOk} />
          </div>      
          <table className=" m-10 w-11/12 text-sm text-left rtl:text-right text-gray-500">
               <thead className="w-full text-xs text-gray-900 uppercase bg-gray-50">
               <tr className="bg-orange-400 text-white w-full font-bold">
               <th scope="col" className="px-6 py-3">제목</th>
               <th scope="col" className="px-6 py-3">작성자</th>
               <th scope="col" className="px-6 py-3">삭제</th>
               <th scope="col" className="px-6 py-3">편집</th>
               </tr>
               </thead>
               <tbody>{tags}</tbody> 
          </table>
     </div>
  )
  
}
