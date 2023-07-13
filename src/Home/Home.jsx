import { MeetupLogoSvg } from "./MeetupLogoSvg";
import { meetupData } from "../data/data"
import { HomeCard } from "../components/HomeCard";
import { Navbar } from "../components/Navbar";
export function Home() {
  return (
    <div className="home-container">
      
      <Navbar />

      <div className="body-header">
        <h1 className="header-text"> Meetup Events </h1>

        <label htmlFor="repeat">
          Select Event type
          <select name="repeat" id="repeat" onChange={()=> console.log("Hello")}>
            <option> Select </option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </label>
      </div>

      <hr className="horizontal-line" />

      <div className="body-content">
    
      { 
      meetupData?.meetups?.map((meeting)=> {
        return(
            <div key={meeting.id}>
            <HomeCard {...meeting}/>
            </div>
        );
      })
      }
      </div>
    </div>
  );
}
