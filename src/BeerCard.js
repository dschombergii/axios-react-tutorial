import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { card_style, image_box } from './CardStyles'

function BeerCard(props) {

    const {handleLike, id, name, tagline, first_brewed, abv, description, image_url} = props

    return (
        <li style={card_style}>
                <img style={image_box} src={image_url} alt=""/>
            <div>
                <h3>{`${name}: `} <span>{first_brewed}</span></h3>
                <h4>{tagline}</h4>
                <p><span>{`ABV: ${abv}% `}</span>{description}</p>
                <button onClick={() => { handleLike(id) }} >
                <FontAwesomeIcon icon={faHeart} size="md" />
                </button>
            </div>
            
        </li>
    )
}

export default BeerCard