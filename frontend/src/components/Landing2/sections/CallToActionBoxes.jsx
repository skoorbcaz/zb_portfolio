import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { BsArrowRightCircle } from 'react-icons/all'

export const CallToActionBoxes = () => {
  return (
    <section>
      <Flex>
        <Flex
          justifyContent='space-between'
          alignItems='flex-end'
          p={10}
          bgColor='gray.700'
          flex={1}
          h={300}
          style={{ borderRight: 'solid 1px', borderTop: 'solid 1px', color: 'var(--chakra-colors-gray-100)' }}
        >
          <Heading size='2xl' fontWeight={500}>
            View My Recent Work
          </Heading>
          <Icon w={6} h={6} as={BsArrowRightCircle} />
        </Flex>
        <Flex
          justifyContent='space-between'
          alignItems='flex-end'
          p={10}
          bgColor='gray.700'
          flex={1}
          h={300}
          style={{ borderRight: 'solid 1px', borderTop: 'solid 1px', color: 'var(--chakra-colors-gray-100)' }}
        >
          <Heading size='2xl' fontWeight={500}>
            More About Me
          </Heading>
          <Icon w={6} h={6} as={BsArrowRightCircle} />
        </Flex>
      </Flex>
    </section>
  )
}
