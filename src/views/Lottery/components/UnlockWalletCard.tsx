import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Ticket } from 'dfswap-ui'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const IconWrapper = styled.div`
  svg {
    width: 80px;
    height: 80px;
  }
`

const CardImage = styled.img`
    margin-bottom: 5px;
  `

const UnlockWalletCard = () => {
  const TranslateString = useI18n()

  return (
    <Card isActive>
      <StyledCardBody>
        <IconWrapper>
          <CardImage src="/images/egg/lottery-ball.png" alt="lottery bunny" width={128} height={128} />
        </IconWrapper>
        <StyledHeading size="md">{TranslateString(999, 'Unlock wallet to access lottery')}</StyledHeading>
        <UnlockButton />
      </StyledCardBody>
    </Card>
  )
}

export default UnlockWalletCard
