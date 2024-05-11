import React , {useState} from 'react'

const Min = 100;
const Max = 12000;

const PriceRange = () => {

const [values, setValues] = useState(50)


const handleChange = (event) => {
    setValues(event.target.value)
}

  return (
    <div>
         <div className='box'>

                <h2>  {values}  </h2> 
            

                 {/* <RangeSlider className='slider' onChange={setValues} value={values} min={Min} max={Max}/>  */}
              
                   <input type='range' defaultValue={values} onChange={handleChange} min={1000} max={20000} step={10}/>
         </div>
    </div>
  )
}

export  {PriceRange}