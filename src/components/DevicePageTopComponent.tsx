import React from 'react'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePage.module.scss'


interface DevicePageTopComponentProps {
    device: DeviceI
}

export default function DevicePageTopComponent({ device }: DevicePageTopComponentProps) {

    console.log('TOP DEVICE PAGE')

 
    const starRef = React.useRef<HTMLDivElement>(document.createElement("div"))


    return (
        <div className={c.device_top_conatiner}>
            <h1>
                {device?.faceDescription}
            </h1>


        </div>
    )
}
