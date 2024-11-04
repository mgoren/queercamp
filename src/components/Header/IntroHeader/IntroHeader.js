import { mailtoLink } from "utils";
import { StyledLink, Paragraph } from 'components/Layout/SharedStyles';
import config from 'config';
const { EMAIL_CONTACT } = config;

export default function IntroHeader() {
  return (
    <>
      <Paragraph>
        Join us at <StyledLink to='https://www.queercontradance.org/queercamp.html'>Queer Contra Dance Camp 2025</StyledLink>!
        Camp is April 11-13, 2025 at Monte Toyon in Aptos, CA.
        It'll be another amazing weekend of contra dance, three days with two great bands, the Sage Thrashers and Starling, and two fantastic callers, Ang DeCarlis and Sue Rosen.
        This year's theme is Sparkle and Shine!
      </Paragraph>
      <Paragraph>Questions? Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.</Paragraph>
    </>
  );
}
