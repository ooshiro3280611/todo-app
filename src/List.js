import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const List = () => {
    return (
        <UlWrap>
            <Item />
            <Item />
            <Item />
            <Item />
        </UlWrap>
    )
}

const UlWrap = styled.ul`
    text-align: center;
    list-style: none;
`

export default List