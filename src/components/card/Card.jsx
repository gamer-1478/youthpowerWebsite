import React, { useEffect, useState } from 'react'
import Carditem from './CardItem'
import './Card.css'
import CardJSON from './CardsJson';

async function returnJsonExtracted() {
    var testArray = []
    var newCardJSON = CardJSON();
    newCardJSON.reverse()
    var prodLen = newCardJSON.length
    var i = 0

    var NewtestArray = new Promise((resolve, reject) => {
        while (i < prodLen) {
            i += 3
            testArray.push(newCardJSON.splice(0, 3))

            if (i >= prodLen - 1) {
                resolve(testArray)
            }
            else {
                resolve(testArray)
            }
        }
    }).then(res => { return res })
    return await NewtestArray;
}

function Cards() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function abcd() {
            var test = await returnJsonExtracted()
            setShows(await test)
            setIsLoaded(true)
        };
        abcd()
    }, [])

    return (
        <div className='cards__container'>
            {isLoaded ? Array.from(shows).map((el, ind) => {
                return (
                    <ul className="cards__items">{
                        Array.from(el).map((el2, inc) => {
                            return (
                                <Carditem
                                    img_src={el2.img_src}
                                    name={el2.name}
                                    post={el2.post}
                                />
                            )
                        })
                    }
                    </ul>
                )
            }) : <h1>Loading</h1>}
        </div>
    );
}

export default Cards
