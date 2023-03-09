import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

type deviceFromBasket = {
    id: deviceId
    count: number
}

interface BacketState {
    devicesIdCounts: deviceFromBasket[]
    
}

export const initialState: BacketState = {
    devicesIdCounts: []
}

const basketDataSlice = createSlice({
    name: 'basketData',
    initialState,
    reducers: {

        dleteItemFromDeviceInfo(state, action) {
            state.devicesIdCounts = state.devicesIdCounts.filter((dev) => dev.id !== action.payload)

            localStorage.setItem('basketData', JSON.stringify( state.devicesIdCounts.filter((dev) => dev.id !== action.payload)))

        },
        setCurrentCountAtDevicesInfo(state, action) {

            for (let i = 0; i < state.devicesIdCounts.length; i++) {

                if (state.devicesIdCounts[i].id == action.payload.id) {
                    state.devicesIdCounts[i] = action.payload
                }
            }

        },
        pushDeviceInfo(state, action) {
             
                state.devicesIdCounts.push(action.payload)
    
                localStorage.setItem('basketData', JSON.stringify(state.devicesIdCounts))

                
            
        },
       
       
        setStartDevicesInfo(state, action) {

            const result = [];

            for (let i = 0; i < action.payload.length; i++) {

                result.push({ id: action.payload[i], count: 1 })

            }

            state.devicesIdCounts = result
        }
    },
})

export default basketDataSlice.reducer

export const {
    pushDeviceInfo,
    dleteItemFromDeviceInfo,
    setCurrentCountAtDevicesInfo,
    setStartDevicesInfo
} = basketDataSlice.actions



