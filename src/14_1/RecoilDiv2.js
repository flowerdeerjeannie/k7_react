import { TbNumber3 } from "react-icons/tb"
import RecoilDiv3 from "./RecoilDiv3"

//n 뿐만 아니라!!!!
//setN까지 props로 받고 div3에도 전달해줘야 div3에서 ***setN을 써서 재정의할 수 있음*** 
export default function RecoilDiv2({num, setN, n2, n3}) {

  return (
     <div className="flex flex-col justify-center items-center text-2xl font-bold">
          <div>
          RecoilDiv2 : n2 = {n2}
          {/* n2를 그냥 이렇게 {n2}로 쓰게되면, 앞에서 n2는 어떻다고 정의된 내용을
          그대로 쓸수있는거임 편하게 생각해 */}
          </div>         
          <RecoilDiv3 n={num} setN={setN} n3={n3}/>
          {/* 앞에서 num은 어쩌구다 한걸 {num}으로 받았으니까 그걸 변수명으로 쓰면
          어쩌구다 한 거 자체를 한번더 넘겨받는거지 
          여기서는 setN을 의미있게 쓰지 않는다고 해도, 여기 div3에 넘겨주기 위해서 받아온다는거 */}
    </div>
  )
}

//실제로 div2에서 setN을 직접적으로는 쓰지 않아도
//3에서 사용하기 위해서는 props로 받아야 한다는 걸 알아야함
