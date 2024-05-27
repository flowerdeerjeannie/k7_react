import { useRef } from "react"
import ButtonC from "../UI/ButtonC"

export default function RecoilDiv3({n, setN, n3}) {
//상태업뎃함수 setN까지 받아야 여기서 handleUP하면 n+1 되게끔=즉 상태를 다르게 업데이트하기 위하여= 사용할 수 있음
//그냥 n만 받아서는 n을 변화시킬수가 없다는걸 알아야함. n은 상태 변수일 뿐.... 
//그냥 n을 n2처럼 그대로 1에 정의해준 함수식대로 사용해줄거면 n2만 받아도 되는데
//우리는 n을 n+1, n-1처럼 기능에 따라서 바뀌게 할것이므로 상태업뎃함수인 setN을 받아와야 n을 새로 정의하기 위해 사용가능함.

//handleUP을 했을때 무엇이 바뀌어야 하는가? n={ }이 무엇인지 바뀌어야한다
//그럼 n을 바뀌게 하는 = n의 상태를 업데이트 해주는 = 함수는 누구인가? setN
//따로 인수로 받을거 ()는 없고 핸들업에서 ***setN을 재정의해야 n의 값에 변화를 줄수있다***는걸 기억해야함 

//천천히 하면, n이 초기값으로 0인 상태에서 handleUP이 *호출*되고,
//그 호출에 따라 {} 바디 안이 실행되면서 상태함수인 setN을 만지니까 *상태 업데이트*가 일어날건데 어떻게 일어나냐?(n+1) 괄호안에 그 업뎃 내용을 써줌
//setN(0+1)로 n이 1이 되는것임. 

     const handleUP = () => {
          setN(n+1); //리액트에서 상태함수(state함수) 뒤에 (n+1), (n*2) 이렇게 쓰게 되면
          //상태를 어떻게 업데이트해줄지를 나타내준다고 보면됨. 
          console.log('n=',n)
     }

     const handleDOWN = () => {
          setN(n-1);
          console.log('n=',n)
     }

  return (
     <div className="flex flex-col justify-center items-center text-2xl font-bold">
          <div>
          RecoilDiv3 : n3={n3}
          </div>
          <div>
               <ButtonC caption='증가'
                          bcolor='sky'
                           handleClick={handleUP} />
               <ButtonC caption='감소'
                          bcolor='sky'
                           handleClick={handleDOWN} />

          </div>
    </div>
  )
}
