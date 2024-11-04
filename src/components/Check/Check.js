import { useState } from 'react';
import { useOrder } from 'components/OrderContext';
import { Typography, Button } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';
import { mailtoLink } from 'utils';
import Loading from 'components/Loading';
import config from 'config';
const { SANDBOX_MODE, EMAIL_CONTACT } = config;

export default function Check({ processCheckout }) {
  const { processing } = useOrder();
  const [ready, setReady] = useState(SANDBOX_MODE);

  setTimeout(() => {
    setReady(true);
  }, 5000);

  const processPayment = () => {
    return 'check'; // paymentId
  };

  const handleRegister = async () => {
    processCheckout({ paymentProcessorFn: processPayment });
  }

  return (
    <section>
      {!processing &&
        <>
          <Typography sx={{ mt: 2 }}>
            Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink> for info on filling out and mailing your check.
          </Typography>

          {!ready && <Loading />}
          <Button variant='contained' color='success' disabled={!ready} onClick={handleRegister} sx={{ mt: 4, mb: 2 }}>
            Register and agree to send a check
          </Button>
        </>
      }
    </section>
  );
}
