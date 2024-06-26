import './MyClock.css'; 
import style from './My.module.css';
import { useState, useEffect } from 'react';

function MyClockTime() {
     const now = new Date(); 
     const clock = now.toLocaleTimeString();  
     const gubun = clock.substring(0, 2);
     const st = {color:"pink", fontWeight:"bold"};
     const [ctime, setCtime] = useState(new Date());

     //setInterval은 초마다 도는 함수, 이걸 돌려서 셋타임이 설정될수있도록.
     useEffect(()=>{
          setInterval(()=>{
               setCtime(new Date())
          }, 1000);
     },[]);

     return (
          <>
          { //return문 안에는 if를 쓸수없으므로 삼항연산자,수식사용하는데 변수값이 === 이면 ? ~~ 이고 밑에는 : 하고.
               // (gubun==='오전') ?  <div className="div2">{clock}</div>
               //                : <div className="div1">{clock}</div>
               //위 삼항연산자를 짧게 만들기 위해서 조건식 ? true출력 : false 출력 을
               //변화하는, 변할 수 있는거라서 수식을 {} 클래스네임으로 잡아줌 
               // <div className={gubun==='오전' ? "div1" : "div2"}>
               // <div style={{color:"yellow", fontWeight:"bold"}}>
               // 위에 import해준거 style이라서 거기서 c1을 잡아서 빼줌
               <div className={style.c1}>
                    {ctime.toLocaleString()}
               </div>
          }
          </>

      );
}
     

export default MyClockTime;