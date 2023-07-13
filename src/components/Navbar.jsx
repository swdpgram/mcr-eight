import { MeetupLogoSvg } from "../Home/MeetupLogoSvg";
export function Navbar() { 
    return(
        <>
        <nav className="nav-container">
        <MeetupLogoSvg />

        <div className="search-container">
          <i className="bi bi-search"></i>
          <label htmlFor="site-search">Search the site:</label>
          <input
            type="search"
            id="site-search"
            name="search"
            placeholder="Search by event title or tags"
          />

          
        </div>
      </nav>
        </>
    );

}