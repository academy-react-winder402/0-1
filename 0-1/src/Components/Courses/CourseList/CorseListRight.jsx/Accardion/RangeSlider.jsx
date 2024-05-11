import React from 'react'



const RangeSlider = () => {

    function getVals(){
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat(slides[0].value);
        let slide2 = parseFloat(slides[1].value);

        if(slide1 > slide2){
            let tmp = slide2; slide2 = slide1; slide1 = tmp
        }

        let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + "-$"  + slide2;
    }
 
    window.onload = function(){
        let sliderSections = document.getElementsByClassName("range-slider");

        for(let x=0 ; x < sliderSections.length; x++){
            let sliders = sliderSections[x].getElementsByTagName("input");

            for(let y=0 ; y < sliders.length ; y++){
            if(sliders[y].tyle === 'range'){
                sliders[y].oninput = getVals;

               sliders[y].oninput();
            }
        }
    }
}

  return (
    <div className='slider'>
     <p>price range </p>
     <div className="range-slider">
        <span className="rangeValues"></span>
        <input type='range' value='1000' min='1000' max='5000' step='500'/>
        <input type='range' value='50000' min='1000' max='5000' step='500'/>        
     </div>
      
    </div>
  )
}

export  {RangeSlider}