import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import AppRouter from '../components/AppRouter'

const MainContainer = styled.div`
    width: 100%;
    background-color: #cccccc;
`

export default function Home() {
  return (
    <MainContainer>
        <Navbar/>
        <AppRouter/>
    </MainContainer>
  )
}
