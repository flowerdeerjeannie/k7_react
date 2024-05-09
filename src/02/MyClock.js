import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock() {
     return (
          //css안먹힌다고 생각했는데 헤더 클래스네임을 앱헤더로 잡아주니까 먹힘 
          <header className="w-full h-full bg-black flex justify-center items-center flex-col">
               <MyClockImage />
               <MyClockTime />
          </header>
     );
}

export default MyClock;