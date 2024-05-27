import { AtomN2 } from "./AtomN.js"
import { useRecoilValue } from "recoil";
import RecoilDiv3 from "./RecoilDiv3"

export default function RecoilDiv2() {
     const n2 = useRecoilValue(AtomN2);

  return (
     <div className="flex flex-col justify-center items-center text-2xl font-bold">
          <div>
          RecoilDiv2 : n은 홀/짝? {n2}
          </div>         
          <RecoilDiv3 />
            </div>
  )
}
