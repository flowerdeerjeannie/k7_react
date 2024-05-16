import ButtonC from "../UI/ButtonC";
import { useState } from "react";


export default function TrafficNav({title, c, sel, setSel}) {
  // const title = '대분류';
  // const c = ['차대사람','차대차','차량단독','철길건널목'];
  // const [sel,setSel] = useState();
  //sel은 내 클릭값을 말하는거임 cTag는 각각 부여되어 있는거고, sel은 내가 누르는 값에 의해 시시각각 변경되는 변수를 말하는거임

  //c를 배열로 잡아주고 맵으로돌면서 버튼으로 바꿔준다.
  // 버튼을 가져오면서 버튼에 프롭스로 쓴 이름을 가져와야 연결이되지
  const cTag = c.map((item) => <ButtonC caption={item} 
                                        key={item} //중복되지 않는값 암거나 키값으로 설정
                                        bcolor={sel === item ? 'orange' : 'sky'} //sel은 내 클릭값을 말하는거임
                                        handleClick={()=>handleClick(item)}/>)
                                        //버튼을 누를때 결과값이 item으로 나오도록 하기 위해 hadleClick(item)!!!

  const handleClick = (item) => {
    setSel(item)
  } //item을 내가 뭘 선택(클릭)하느냐에 따라서 sel의 값을 변경할수있도록 하는거임. item은 움직이지않는값이고 
   //sel은 내가 누르는거에따라 바뀌는값 

  return (
    <div className="w-full flex justify-center items-center my-5">
      <div className="w-1/5 flex justify-center items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {cTag}
      </div>
    </div>
  )
}
