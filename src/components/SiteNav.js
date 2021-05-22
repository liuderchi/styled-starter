import { useRouter } from 'next/router'
import { connect } from 'refunk'
import { enableChooseThemeModal } from '../updaters'
import { Flex, Box } from 'grid-styled'
import { Div, Nav, H1, A, Img, Text, Span } from 'styled-system-html'
import Button from './Button'
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'
import SiteNavLinkExternal from './SiteNavLinkExternal'

const SiteNav = connect((props) => {
  const router = useRouter()
  return (
    <Div bg="base" position="fixed" zIndex="9999" width={1}>
      <Nav bg="rgba(0,0,0,.2)" textAlign="left" px={[2, 0, 2]}>
        {/* <Div
          display={['none', 'block']}
          position="absolute"
          top="48px"
          right="8px"
          pl={3}
          mt={[0, 2, 3]}
          bg="base"
          borderRadius="8px"
        >
          <Text
            onClick={() => props.update(enableChooseThemeModal(true))}
            style={{ cursor: 'pointer' }}
            display="inline-block"
            fontSize={1}
            pr={3}
            color="white"
          >
            <Span id="currentTheme">{props.theme.name}</Span>{' '}
            <Button
              bg="white"
              fontWeight="bold"
              ml={1}
              px={1}
              py="2px"
              fontSize={0}
              color="blue"
            >
              choose theme
            </Button>
          </Text>
          <Div display="inline-block" px={3} mt={2}>
            <Img
              position="relative"
              style={{ top: '6px' }}
              width="80px"
              src="https://travis-ci.org/johnpolacek/styled-starter.svg?branch=master"
              alt="branch health status"
            />
          </Div>
        </Div> */}
        <Flex flexWrap="wrap" fontSize={[1, 2]}>
          <SiteNavLink
            url="/products"
            isCurrent={router.pathname.indexOf('/products') > -1}
          >
            Products
          </SiteNavLink>
          {/* <SiteNavLink
            url="/about"
            isCurrent={router.pathname.indexOf('/about') > -1}
          >
            About
          </SiteNavLink> */}
        </Flex>
      </Nav>
    </Div>
  )
})

export default SiteNav
