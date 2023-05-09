import { Button, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { CgArrowLeft } from 'react-icons/all'
import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { slides } from '../Portfolio/slides'
import React from 'react'

export const ItemPreview = ({ slide, showNav }) => {
  return (
    <Flex bg={slide.bgColor} width='100vw' height='100vh' flexDirection='column'>
      {showNav && (
        <Flex alignItems='center' px={20} height='100px'>
          <Flex flex={1}>
            <Heading style={{ display: 'flex', alignItems: 'center' }} fontSize='1.5em'>
              <CgArrowLeft style={{ marginRight: '0.5em' }} />
              back to all
            </Heading>
          </Flex>
          <Flex>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Gravitate GO
              </MenuButton>
              <MenuList>
                {slides.map((slide) => (
                  <MenuItem>{slide.title}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      )}
      <Flex flex={1} justifyContent='center' gap='5vw'>
        <Flex width='25vw' alignItems='center'>
          <h2
            data-scroll=''
            data-scroll-speed='2'
            data-scroll-delay='0.1'
            data-scroll-position='top'
            className='content__title anim-block-wrap'
          >
            <img className='item-logo' src={slide.logoImg} style={{ width: '50vw' }} />
          </h2>
        </Flex>
        <Flex alignItems='center'>
          <img
            style={{ width: '50vw', height: '30vw', objectFit: 'cover' }}
            data-scroll=''
            data-scroll-speed='1'
            data-scroll-delay='0.1'
            data-scroll-position='top'
            className='content__intro-img'
            src={slide.slideImg}
            alt='Some image'
          />
        </Flex>
      </Flex>
      <Flex alignItems='center' justifyContent='center' height='15vh'>
        <IconButton aria-label='View Project' icon={<ArrowDownIcon />} size='lg' variant='outline' />
      </Flex>
    </Flex>
  )
}
