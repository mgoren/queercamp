import { useOrder } from 'components/OrderContext';
import { Form } from 'formik';
import People from '../People';
import PaymentInfo from '../PaymentInfo';
import NavButtons from 'components/NavButtons';
import config from 'config';
const { NUM_PAGES } = config;

export default function FormContents({ formikRef }) {
  const { updateOrder, currentPage, setCurrentPage } = useOrder();

  // console.log('FormContents rendered');

  function handleClickBackButton() {
    if (formikRef.current) {
      const values = formikRef.current.values;
      updateOrder(values);
      formikRef.current.setSubmitting(false);
      setCurrentPage(currentPage - 1);
    }
  }

  return(
    <Form spellCheck='false'>
      {currentPage === 1 && <People />}
      {currentPage === 2 && <PaymentInfo />}

      {currentPage > 1 &&
        <NavButtons
          backButtonProps = {{ text: 'Back', onClick: handleClickBackButton }}
          nextButtonProps = {{ text: currentPage === NUM_PAGES ? 'Checkout' : 'Next...'}}
        />
      }
    </Form>
  );
}
