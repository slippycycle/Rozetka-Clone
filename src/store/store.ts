import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { typeSlice } from './features/Types.Slice';
import typeReducer from './features/Types.Slice'
import brandReducer from './features/Brands.Slice'
import productReducer from './features/Devices.Slice'
import basketReducer from './features/Basket.Slice'
import chatReducer from './features/Chat.Slice'
import rangeReducer from './features/PriceRange'
import sortReducer from './features/SortDevices.Slice'
import basketStateSlice from './BasketState.Slice';




const rootReducer = combineReducers({
  typeReducer,
  brandReducer,
  productReducer,
  basketReducer,
  rangeReducer,
  chatReducer,
  sortReducer,
  basketStateSlice

   
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']
