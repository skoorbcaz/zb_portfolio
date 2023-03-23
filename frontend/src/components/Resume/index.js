import { Box, Button, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import './styles.css'
import { DownloadIcon } from '@chakra-ui/icons'
export const Resume = () => {
  return (
    <Flex direction='column' alignItems='center' overflow='auto' height='100vh' ml='150px' p='100'>
      <Flex justifyContent='space-between' width='100%' maxWidth='1000px' alignItems='center' mb='5'>
        <Heading maxW='1000' as='h1' size='2xl'>
          Resume
        </Heading>
        <Button leftIcon={<DownloadIcon />} colorScheme='green'>
          DOWNLOAD
        </Button>
      </Flex>

      <Box maxW='1000'>
        <Box className='resume' borderRadius={5} mt='5' py='10' px='20' bg='#1a1b1e'>
          <Box borderBottom='solid 1px var(--chakra-colors-gray-500)' py='5'>
            <Heading as='h2' mb='3'>
              <b>ZAC</b> BROOKS
            </Heading>
            <Heading color='brand.500' as='h4' mb='5'>
              UI/UX Lead
            </Heading>
          </Box>
          <Flex mt={8} py='5'>
            <Flex direction='column' borderRight='solid 1px var(--chakra-colors-gray-500)' flex={1}>
              <Contact />
              <Education />
              <Heading color='gray.300' as='h5' mb='3'>
                SKILLS
              </Heading>
              {skillsPage1.map((item, index) => (
                <SkillsList key={index} item={item} />
              ))}
            </Flex>
            <Flex direction='column' pl='10' flex={3}>
              <Box mb='10'>
                <Heading color='gray.300' as='h5' mb='8'>
                  PROFILE
                </Heading>
                <Text>
                  Senior Frontend Engineer & UI/UX Designer that{' '}
                  <b>crafts visceral experiences to help users solve complex problems in simple ways.</b> Is a strong
                  evangelist in the power of state management, component re-use, and performance benefits through expert
                  level knowledge of the React ecosystem. Strives for streamlined connections between design and
                  engineering through intuitive design systems and powerful component libraries. Strongly inspired by
                  past experiences of teams challenging what is impossible together and thoroughly enjoys teaching and
                  learning from colleagues through paired programming, code reviews, and architecture discussions.
                </Text>
              </Box>
              <Box>
                <Heading color='gray.300' as='h5' mb='8'>
                  Experience
                </Heading>
                {workExperiencePage1.map((item, index) => (
                  <ExperienceItem key={index} item={item} />
                ))}
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box className='resume' borderRadius={5} mt='5' py='10' px='20' maxW='1000' bg='#1a1b1e'>
        <Flex mt={8} py='5'>
          <Flex direction='column' borderRight='solid 1px var(--chakra-colors-gray-500)' flex={1}>
            <Heading color='gray.300' as='h5' mb='3'>
              SKILLS (CONT.)
            </Heading>
            {skillsPage1.map((item, index) => (
              <SkillsList key={index} item={item} />
            ))}
          </Flex>
          <Flex direction='column' pl='10' flex={3}>
            <Box>
              <Heading color='gray.300' as='h5' mb='8'>
                Experience (CONT.)
              </Heading>
              {workExperiencePage2.map((item, index) => (
                <ExperienceItem key={index} item={item} />
              ))}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
const SkillsList = ({ item }) => {
  return (
    <Box my='4'>
      <Heading color='gray.300' as='h6' mb='3'>
        {item.category}
      </Heading>

      <List>
        {item.items.map((item, index) => {
          return (
            <ListItem key={index} mb='2'>
              <Text>{item}</Text>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
const ExperienceItem = ({ item }) => {
  return (
    <Box mt='10'>
      <Heading color='gray.300' as='h6' mb='3'>
        {item.title}
      </Heading>
      <Heading color='gray.300' className='light' fontWeight={500} as='h6' mb='5'>
        {item.company} | {item.date_range}
      </Heading>
      <List>
        {item.responsibilities.map((item, index) => {
          return (
            <ListItem key={index} mb='2'>
              <Text>{item}</Text>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

const Contact = () => {
  return (
    <Box>
      <Heading color='gray.300' as='h5' mb='10'>
        CONTACT
      </Heading>
      <Heading color='gray.300' as='h6' mb='3'>
        MOBILE
      </Heading>
      <Text mb='5'>501.733.2220</Text>
      <Heading color='gray.300' as='h6' mt='3' mb='3'>
        EMAIL
      </Heading>
      <Text mb='5'>zac@lunacasoftware.com</Text>
      <Box height='1px' bg='gray.500' my='10' mx='10' />
    </Box>
  )
}
const Education = () => {
  return (
    <Box>
      <Heading color='gray.300' as='h5' mb='10'>
        EDUCATION
      </Heading>
      <Heading color='gray.300' as='h6' mb='3'>
        BACHELORS OF COMPUTER SCIENCE
      </Heading>
      <Text>University of Central Arkansas </Text>
      <Text>2014-2017 </Text>
      <Box height='1px' bg='gray.500' my='10' mx='10' />
    </Box>
  )
}

const workExperiencePage1 = [
  {
    title: 'SENIOR UI/UX ENGINEER',
    company: 'CAPSPIRE',
    date_range: '2019 - CURRENT',
    responsibilities: [
      'Owned the user experience feature life cycle for the entire products branch, from ideation to design to development.',
      'Bootstrapped Gravitate’s new product, Bestbuy & Dispatch, from a team of two to a team of twelve. Marrying visceral user experience with AI-based optimization, our most profitable product saved large fuel C-store operators a half a cent on every gallon they sold.',
      'Designed and developed industry-challenging UI’s to deliver a vast feature set including driver scheduling, drag and drop dispatching, payroll, analytics, and many others, all powered by React.',
      'Furthered Gravitate’s brand by designing and developing a bold marketing site that generated sales leads and clearly explained our product offerings. (gravitate.energy)',
      'Brought re-usability and improved team collaboration through architecting a NPM package to house our internal component library that housed over 60 components and contexts.',
      'Designed and developed a React Native tablet in-cab app for drivers that guided them through their day, with real-time communication with dispatchers, handling no connectivity gracefully, and document scanning, entry, and uploading.',
      'Created Figma design systems for our internal libraries and products that reduced developer-designer disconnect through marrying inherited theme variables and components.',
    ],
  },
  {
    title: 'SOFTWARE ENGINEER',
    company: 'CAPSPIRE',
    date_range: '2018 - 2019',
    responsibilities: [
      'Engineered new functionality and new client implementations of a few ASP.NET projects through complex service methods and pages fueled by Razor and JQuery, while making strides to challenge design/UI standards.',
      'Spearheaded the modernization of Gravitate’s user interfaces that was revered by users and improved developer experience, supporting configuration-based theming as well.',
    ],
  },
]
const workExperiencePage2 = [
  {
    title: 'SOFTWARE ENGINEER (continued)',
    company: 'CAPSPIRE',
    date_range: '2018 - 2019',
    responsibilities: [
      'Utilized graphic design talent to brand Gravitate’s products and a few other capSpire offerings.',
      'Introduced software mockups and prototypes as a critical piece of our software development process, largely reducing the churn between acceptance criteria and development. It also unlocked a large block in our sales pipeline, allowing product owners to demo ideas that weren’t built out yet to potential clients. Software contracts that grew from design prototypes tripled our sales pipeline.',
    ],
  },
  {
    title: 'OWNER',
    company: 'LUNACA SOFTWARE (SELF-EMPLOYED)',
    date_range: '2017 - 2021',
    responsibilities: [
      'Started and managed a successful freelance business that served 20+ clients. Gained invaluable experience through being the sole employee of a business that offered all services in the software life cycle, from branding design all the way to production software.',
      'Developed CMS marketing websites for many businesses that had a poor or nonexistent web presence, stood up business email servers, and delivered a content management UX that even non-technical users could run with.',
      'Elevated 20+ businesses’ brands with branding packages, including logo designs, branding style guides, merchandise/packaging design, and document templates.',
      'Grew as a manager through navigating the challenges of outsourcing work, teaching less experienced resources, managing scope, and keeping clients raving fans.',
    ],
  },
]
const skillsPage1 = [
  {
    category: 'FUNCTIONALITY',
    items: [
      'HTML / JSX',
      'React / Hooks',
      'React Native & Expo',
      'Javascript / ES6',
      'antd / Bootstrap',
      'Chrome Dev Tools',
      'NPM / Yarn',
      'Babel / Webpack',
      'Sentry / Google Analytics',
      'AJAX / Axios',
      'Gatsby',
      'GraphQL',
      'Strapi CMS',
      'JQuery',
      'Python / Fast API',
      'Mongo / UMongo',
    ],
  },
  {
    category: 'DATA VISUALIZATION',
    items: ['AG Grid', 'Nivo / Highcharts', 'Google Maps API'],
  },
]
const skillsPage2 = [
  [
    {
      category: 'STYLING',
      items: ['CSS', 'Sass / Less', 'Dynamic Site Theming', 'Responsive Design', 'Cross-Browser Testing'],
    },
    {
      category: 'DESIGN',
      items: [
        'Figma / Managing Libraries',
        'Adobe XD',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Adobe After Effects',
        'Prototyping / Animation',
      ],
    },
    {
      category: 'EXPERIENCED LEADING',
      items: [
        'Team Stand-ups',
        'Sprint Ceremonies',
        'Sales Demos',
        'User Interviews / Discovery',
        'Grooming Sessions',
        'Architecture Discussions',
        'Design Reviews',
        'Software Support',
      ],
    },
    {
      category: 'PROCESS',
      items: ['Docker / Drone', 'Github Actions', 'Git Management', 'Jira / Scrum / Agile'],
    },
  ],
]
