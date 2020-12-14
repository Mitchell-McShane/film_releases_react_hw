import {useState} from "react";
import ReleaseList from "../components/ReleaseList";

const ReleaseBox = () => {
    const initialState =
    [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Wonder Woman 1984",
          url: "https://www.imdb.com/title/tt7126948/?ref_=rlm"
        },
        {
          id: 3,
          name: "The Haunting of Alice Bowles",
          url: "https://www.imdb.com/title/tt13342216/?ref_=rlm"
        },
        {
          id: 4,
          name: "Let Him Go", 
          url: "https://www.imdb.com/title/tt9340860/?ref_=rlm"
        },
        {
          id: 5,
          name: "The Croods 2",
          url: "https://www.imdb.com/title/tt2850386/?ref_=rlm"
        }
      ];

      const [releases, setReleases] = useState(initialState);

      return (
        <>
          <h1>Upcoming Film Releases for UK</h1>
          <ReleaseList releases ={releases}/>
          <div className="link-imdb">
            <a href="https://www.imdb.com/calendar/?region=gb"><h2>View more upcoming releases</h2></a>
          </div>
        </>
      );

}

export default ReleaseBox;