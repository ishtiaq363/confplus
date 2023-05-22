import Search from './Search';
import DisplaySchedule from './DisplaySchedule';
export default function Page(){
  return <>
  <article>
  <h3>Conference Schedule</h3>
  <div className="container">
  <Search />
  </div>
  <div className="container ">
  <DisplaySchedule />
  <DisplaySchedule />
  </div>
  </article>
  </>
}