import { useState, useEffect } from "react"
import './Date.css'

const CurrentDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const hour = currentDateTime.getHours('').toString();
  const minutes = currentDateTime.getMinutes().toString();
  const second = currentDateTime.getSeconds().toString();
  const dayOfWeek = currentDateTime.getDate().toString();
  const month = currentDateTime.getMonth().toString(); //cause its start zero


  return (
    <span>
      <div className="day">
        {`Date: ${month == 0 ? 1 : month}/${dayOfWeek}`}
      </div>
      <div className="time">

        {`${hour}:${minutes}:${second}`}
      </div>
    </span>
    
  )
}

export default CurrentDate 