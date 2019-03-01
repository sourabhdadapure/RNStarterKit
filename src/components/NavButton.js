import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-elements'

const NavButton = ({ loading, onPress, title }) => (
  <Button onPress={onPress} loading={loading} title={title} />
)

export default NavButton
