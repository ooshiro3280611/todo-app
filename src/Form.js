import React from 'react';

import styled from 'styled-components'


const Form = () => {
    return (
        <FormWrap>
            <input type="text" />
            <button type="submit">追加</button>
        </FormWrap>
    )
}

const FormWrap = styled.form`
    text-align: center;
    input {
        width: 500px;
    }
`

export default Form
