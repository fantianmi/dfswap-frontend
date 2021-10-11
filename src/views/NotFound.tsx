import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from 'dfswap-ui'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const LogoImage = styled.img`
  margin-bottom: 5px;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <LogoImage src="/images/egg/spinner.png" width="200px" />
        <Heading size="xxl">404</Heading>
        <Text mb="16px">{TranslateString(999, 'Oops, page not found.')}</Text>
        <Button as="a" href="/" scale="sm">
          {TranslateString(999, 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
