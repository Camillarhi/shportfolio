import PortfolioCards from "./portfolioCards"
import RealEstate from '../img/realestate.jpeg';
import P2P from '../img/p2p.jpeg';
import Inventory from '../img/salesregisterreact.jpeg';
import Revent from '../img/revent.jpeg';

export default function Portfolio() {

  const projectLists = [
    {
      name: "Real Estate",
      toggleClassName: "react",
      imgSrc: RealEstate,
      projectLink: "https://my-real-estate.netlify.app/"
    },
    {
      name: "P2P",
      toggleClassName: "react nest",
      imgSrc: P2P,
      projectLink: "https://p2p-frontend-9d1d1e.netlify.app/"
    },
    {
      name: "Sales Inventory",
      toggleClassName: "react asp",
      imgSrc: Inventory,
      projectLink: "https://salesregister.netlify.app/"
    },
    {
      name: "Revent Digitals",
      toggleClassName: "react",
      imgSrc: Revent,
      projectLink: "https://reventdigitals.netlify.app/"
    },
  ]
  return (
    <div className="container" data-aos="fade-up">
      <div className='titleDiv'>
        <h1 className='title'>PORTFOLIO</h1>
      </div>
      <div className="row portfolioNav" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-12 d-flex justify-content-center">
          <ul className="row portfolioFilters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".react">React</li>
            <li data-filter=".asp">Asp.Net Core</li>
            <li data-filter=".nest">Nest Js</li>
          </ul>
        </div>
      </div>
      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
        {projectLists && projectLists?.length > 0 && projectLists?.map(cards =>
          <PortfolioCards name={cards.name} toggleClassName={cards.toggleClassName} imgSrc={cards.imgSrc} projectLink={cards.projectLink} />
        )}
      </div>
    </div>

  )
}