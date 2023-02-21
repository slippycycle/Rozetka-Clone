import axios from 'axios'
import React from 'react'
import { DeviceI } from '../models/models'
import { setDevicesFromBacket } from '../store/features/Backet.Slice'
import { setCurrentPage } from '../store/features/Device.Slice'
import { setMaxRangePrice } from '../store/features/PriceRange'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Backet.module.scss'
import SmallDeviceItem from './SmallDeviceItem'

interface DeviceItemFromBacketProps {
    id: string | number
}


export function DeviceItemFromBacket({ id }: DeviceItemFromBacketProps) {

    
    const [loading, setLoading] = React.useState<boolean>(true)
    const [device, setDevice] = React.useState<DeviceI | any>({})

 
    async function fetchDevice() {
        const response = await axios.get(`http://localhost:3001/products?id=${id}`)


        const result = (response.data[0] as DeviceI ) 

        return result
    }

    React.useEffect(() => {
        setLoading(true)
        fetchDevice().then(res => setDevice(res)).then(res => setLoading(false))
    }, [])



    return (

        <>
            {loading ?
                <h2>Loading</h2>
                :
                <SmallDeviceItem device={device} />
            }
        
        </>



    )
}