import React from 'react'
import SpecialItem from './SpecialItem'

export default function Specials() {
  return (
    <div>
        <div>
            <div>
                <h3>
                    Specials
                </h3>
            </div>
            <div>
                <button>
                    Online Menu
                </button>
            </div>
        </div>
        <div>
            <SpecialItem
                image='greek salad.jpg'
                title='Greek Salad'
                price='$12.99'
                description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
            />
            <SpecialItem
                image='bruchetta.svg'
                title='Bruchetta'
                price='$9.99'
                description='Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written '
            />
            <SpecialItem
                image='lemon dessert.jpg'
                title='Lemon Dessert'
                price='$6.99'
                description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou'
            />
        </div>
    </div>
  )
}
