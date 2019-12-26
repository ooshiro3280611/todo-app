import React from 'react';

import Form from './Form'

import List from './List'
import styled from 'styled-components'

const App = () => {
    return (
        <DivWrap>
            <Form />
            <List />
        </DivWrap>
    )
}

const DivWrap = styled.div`
    padding-top: 80px;
    background-color: skyblue;
`

export default App
