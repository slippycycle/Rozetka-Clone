import React from 'react'
import DoubleRangeSlider from './DoubleRangeSlider'
import RangeSlider from './RangeSlider'

export default function RangeContainer() {
   
   
   const [maxPrice, setMaxPrice] = React.useState(100000)
   const [minPrice, setMinPrice] = React.useState(0)

   const RangeContext = React.createContext<any>(null)

    

    return (
        <>
            <RangeContext.Provider value={{maxPrice,minPrice}}>
             <DoubleRangeSlider maxSum={100000} startSum={20000} endSum={100000}/>
            </RangeContext.Provider>
        </>

    )
}
