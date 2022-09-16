import React from 'react'

export default function PortfolioCards({ toggleClassName, imgSrc, name, projectLink }) {
    return (
        <>
            <div className={` ${toggleClassName}`}>
                <div className="portfolio-wrap">
                    <img src={imgSrc} className="img-fluid" alt="portfolio" style={{background:'red', width:'100%'}} />
                    <div className="portfolio-info">
                    <a href={projectLink} rel="noreferrer" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /><h4>
                        {name}</h4></a>
                        <div className="portfolio-links">
                            <a href={projectLink} rel="noreferrer" target='_blank' className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
