//import Search from './Search';
//import DisplaySchedule from './DisplaySchedule';
import Search from '../../public/schedule/Search';
import DisplaySchedule from '../../public/schedule/DisplaySchedule';
export default function Page(){
 
  return <>
  <article>
  <h3>Conference Schedule</h3>
  <div className="container">
  {/* <Search /> */}
  </div>
  <div className="container ">
  <DisplaySchedule />
  
  </div>
  </article>
  </>
}