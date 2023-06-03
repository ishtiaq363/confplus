'use client'
import { useEffect, useState } from 'react';
import AddSession from '../../public/organizer/AddSession'
import { api } from '../../public/scripts/API-services'
import Loader from '../../public/Loader'
function Page() {
  const [dates, setDates] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getConfDates() {
      setLoading(true)
      setDates(...(await api.getDates()))
      setLocations(...(await api.getLocations()))
      console.log(dates)
      console.log(locations)
      setLoading(false)
    }
    getConfDates();
  }, [])

  return <>
    {!loading ? <AddSession confDates={dates?.conDate} confLocations={locations?.locationName} /> : <Loader/> }
   
  </>
}
export default Page;