import { GalleryData } from "../../data/GalleryData"
import ReleaseCard from "./ReleaseCard"
import { useState } from "react";
import "./NewRelease.css"


const Try = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const projectsToDisplay = showMore ? GalleryData : GalleryData.slice(0, 3);


  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">
        New Releases
      </h2>
      <div className="project__container container">
        {projectsToDisplay.map((project, index) => (
          <ReleaseCard key={index} project={project} />
        ))}
      </div>
      <button
        onClick={toggleShowMore}
        className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
      >
        {showMore ? (
          <>
            <span>Show Less</span>
          </>
        ) : (
          <>
            <span>Show More</span>
          </>
        )}
      </button>
    </section>


  )
}
export default Try