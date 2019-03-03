import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SplashText = styled.Text`
  font-size: 15;
`

const SplashComponent = () => (
  <Wrapper>
    <SplashText> Right Now </SplashText>
  </Wrapper>
)

export default SplashComponent
