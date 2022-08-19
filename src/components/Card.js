import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
`
const ImgTag = styled.img`
    position: absolute;
    top:3px;
    width: 100px;
    margin-left:20px;
`;

const Name = styled.p`
    position: absolute;
    margin:0;
    top:13px;
    left:130px;
`

const CerDate = styled.p`
    position: absolute;
    margin: 0;
    top:35px;
    left:130px;
`

function Card({ certificate }) {
    console.log(certificate);
    return (
        <CardDiv>
            <ImgTag src={certificate.imageURL} />
            <Name>{'자격증 명 : ' + certificate.name}</Name>
            <CerDate>{'유효기간 : ' + certificate.date.getFullYear().toString() + ' / ' + certificate.date.getMonth().toString()}</CerDate>
        </CardDiv>
    )
}

export default Card