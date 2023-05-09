import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const TwoColumnText = ({ left, right, size = 'md' }) => {
  return (
    <Flex my={50} pt={10}>
      <Heading style={{ minWidth: 'max-content' }} fontSize='1.75em'>
        {left}
      </Heading>

      <Text ml={40} fontSize={size === 'md' ? '1.5em' : '1.1em'}>
        {right}
      </Text>
    </Flex>
  )
}
