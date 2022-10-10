import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderStyle>
            <div className="header">
                <h1 className="header-title">Experience</h1>
            </div>
        </HeaderStyle>
    )
}

export default Header

const HeaderStyle = styled.div`

    font-family: roboto;
    font-size: 50px;
    background: url('https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg');
    background-size: 40%;
    height: 150px;

    .header-title {

        color: #f3eedb;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        margin: 0px;
        text-align: center;
        font-family: 'Roboto', Oxygen;
    }

    .pin {
        color: red
    }

`
