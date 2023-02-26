import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/HorizontalBasket.module.scss'
import HorizontalBasketImageContainer from './HorizontalBasketImage'


export default function HorizontalBasket() {

    const { devicesId } = useAppSelector(state => state.backetReducer)

    const basket = JSON.parse(localStorage.getItem('backet') as string).slice(0, 5)


    return (
        <div className={c.horizontal_basket}>
            <div className={c.text_container}>
                <h2>
                    {`In basket ${basket.length} devices`}
                </h2>
                <p>
                    {`total sum ${200000}`}
                </p>
            </div>
            <div className={c.photo_container}>
                {
                    basket.map((id: string | number) =>
                        <div className={c.device_photo_container}>
                            <HorizontalBasketImageContainer id={id} />
                        </div>)
                }
            </div>
            <div className={c.link_container}>
                <a>Open Basket</a>
                <button>make an order</button>
            </div>
        </div>
    )
}