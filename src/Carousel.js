import { useState } from "react";
import "./Carousel.css";
import Card from './Card';


const Carousel = ({ photos, title }) => {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    // setCurrCardIdx(currCardIdx + 1);
    const isLastSlide = currCardIdx === total - 1;
    const newIndex = isLastSlide ? 0 : currCardIdx + 1;
    setCurrCardIdx(newIndex);
  }


  function goBackward() {    
    const isFirstSlide = currCardIdx === 0;
    const newIndex = isFirstSlide ? total - 1 : currCardIdx - 1;
 
    setCurrCardIdx(newIndex);
  }
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="bi bi-arrow-right-circle" onClick={goBackward}>  ❰❰❰PREVIOUS❰❰❰  </div>
      <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
      <div className="bi bi-arrow-left-circle" onClick={goForward}>  ❱❱❱NEXT❱❱❱  </div>
    </div>
  )
}

export default Carousel