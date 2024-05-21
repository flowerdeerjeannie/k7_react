import ButtonC from "../UI/ButtonC"
import { useNavigate } from "react-router-dom" //Route돔에서 지원하는인터페이스


export default function RouteNav() {
  const navigate = useNavigate();

  return (
    <div className="w-full grid grid-cols-6">
      <ButtonC caption="Home"
               bcolor='sky'
               handleClick={()=>{navigate('/')}} />
      <ButtonC caption="Page1"
               bcolor='sky'
               handleClick={()=>{navigate('/p1')}} />
      <ButtonC caption="Page2"
               bcolor='sky'
               handleClick={()=>{navigate('/p2')}} />
    </div>
  )
}
