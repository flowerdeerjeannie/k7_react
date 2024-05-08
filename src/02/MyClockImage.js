import cimg from './clock.png';
import MyClockTime from './MyClockTime';



function MyClockImage() {
     return (
          <header classname="App-header">
                    <img src={cimg} className='App-logo' alt='시계' />
          </header>
     );
}

export default MyClockImage;