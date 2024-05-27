import { RecoilRoot } from "recoil"; //Recoil state를 사용하기 위해서는
//recoil 상태를 사용하고자 하는 컴포넌트의 부모컴포넌트에 RecoilRoot 선언하고 밑에처럼 묶어주기
import RecoilDiv1 from "./RecoilDiv1";

export default function () {
  return (
    <RecoilRoot>
      <RecoilDiv1 />
    </RecoilRoot>
  )
}
