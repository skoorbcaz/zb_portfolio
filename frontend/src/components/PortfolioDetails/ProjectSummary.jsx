import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CgArrowRight } from 'react-icons/all'
import React from 'react'

export const ProjectSummary = () => {
  return (
    <Box mb={100}>
      <Flex gap={100} px={100} pt={100} justifyContent='center'>
        <Flex flexDirection='column' width='900px'>
          <Heading as='h3' size='s'>
            ABOUT THE PROJECT
          </Heading>
          <Heading mt={3} as='h2' size='4xl'>
            transforming a startup products org to medium-sized interface machine{' '}
          </Heading>
        </Flex>
        <Flex flexDirection='column' width='300px' />
      </Flex>
      <Flex px={100} pt={30} gap={100} justifyContent='center'>
        <Flex flexDirection='column' width='900px'>
          <Text fontSize='1.5em' mt={10}>
            Through my journey of half a decade, I led the discovery, design, and architecture for important product
            experiences, spanning multiple Fortune 100 and Fortune 500 clients, and brought React to three products,
            breaking feature limitations due to accrued technical debt. Finally, we owned the user experience feature
            life cycle for the entire products branch, and designed and developed a bold marketing site and React Native
            in-cab app, furthering Gravitate's brand and improving the driver experience.
          </Text>
          <Heading mt={10} style={{ display: 'flex', alignItems: 'center' }} fontSize='1.5em'>
            view marketing site
            <CgArrowRight style={{ marginLeft: '0.5em' }} />
          </Heading>
        </Flex>
        <Flex width='300px' flexDirection='column'>
          <Heading mt={10} as='h3' size='s'>
            MY ROLE
          </Heading>
          <Text fontSize='1.25em' mt={3}>
            Frontend Engineer
          </Text>
          <Text fontSize='1.25em' mt={3}>
            UI/UX Designer
          </Text>
          <Text fontSize='1.25em' mt={3}>
            Brand Designer
          </Text>
          <Text fontSize='1.25em' mt={3}>
            Engineering Manager
          </Text>
          <Heading mt={10} as='h3' size='s'>
            COMPANY
          </Heading>
          <Text fontSize='1.25em' mt={3}>
            Gravitate
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
