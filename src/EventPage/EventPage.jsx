import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { meetupData  } from "../data/data";
import { Navbar } from "../components/Navbar";
export function EventPage() { 

    const { id } = useParams(); 

    useEffect(()=> { 

        const meetingData = () => { 
          const individualMeetingData = meetupData?.meetups?.filter((meeting)=>meeting.id===id)
          console.log(individualMeetingData)
          setMeeting(individualMeetingData)
        }
   
        meetingData(); 
      },[id]); 

      const [ meeting, setMeeting] = useState([]); 

    return(
 <>

  <Navbar />

    { 
        meeting?.map((item)=> { 
            return(
                <div key={item.id}>
                    {item.title}
                </div>
            );
        })
    }
 </>
    );
}