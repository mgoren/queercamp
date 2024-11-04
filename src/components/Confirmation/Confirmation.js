import Receipt from "components/Receipt";
import { useOrder } from 'components/OrderContext';
import { Box, Button } from '@mui/material';
import { StyledPaper, StyledLink, Paragraph, SectionDivider } from 'components/Layout/SharedStyles';
import { mailtoLink } from 'utils';
import config from 'config';
const { EMAIL_CONTACT } = config;

export default function Confirmation() {
  const { order, startOver } = useOrder();

  return (
    <>
      <StyledPaper>
        <Paragraph>
          Thank you for registering to join us at Queer Contra Dance Camp 2025!
          You will be emailed your registration information for your records.
          You can find information about camp at <StyledLink to='https://www.queercontradance.org/queercamp.html'>https://www.queercontradance.org/queercamp.html</StyledLink> and we will email you in the months before camp.
          If you have any questions, please contact us at <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.
        </Paragraph>
        <SectionDivider />
        <Receipt order={order} isPurchaser={true} />
      </StyledPaper>
      <StyledPaper>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <>
            <div />
            <Button variant='outlined' color='warning' onClick={startOver}>Start another registration</Button>
            <div />
          </>
        </Box>
      </StyledPaper>
    </>
  );
}
