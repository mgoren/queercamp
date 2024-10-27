const config = {
  SANDBOX_MODE: true, // for testing only
  SHOW_PRE_REGISTRATION: false,
  REGISTRATION_ONLY: true,
  ADMISSION_QUANTITY_MAX: 4,
  ADMISSION_COST_RANGE: [125, 999],
  ADMISSION_COST_DEFAULT: 380,
  DEPOSIT_OPTION: true,
  DEPOSIT_COST: 50,
  DONATION_OPTION: true,
  DONATION_MAX: 999,
  INCLUDE_PRONOUNS_ON_NAMETAG: false,
  INCLUDE_LAST_ON_NAMETAG: true,
  PAYMENT_METHODS: ['paypal', 'check'], // options are stripe|paypal|check (first is default)
  EVENT_TITLE: 'San Francisco Bay Queer Contra Dance',
  EVENT_LOCATION: 'Monte Toyon Camp',
  EVENT_LOCATION_2: '220 Cloister Lane, Aptos, CA',
  EVENT_DATE: 'April 11-13 2025',
  TITLE: 'Queer Contra Dance Registation',
  CONFIRMATION_PAYPAL_TITLE: 'SFBQCD Confirmation',
  CONFIRMATION_CHECK_TITLE: 'SFBQCD Registration',
  EMAIL_CONTACT: 'camp@queercontradance.org',
  COVID_POLICY_URL: 'https://queercontradance.org/queercamp.html#healthsafetyprecautions',
  SAFETY_POLICY_URL: 'https://queercontradance.org/queercamp.html#conduct',
  DIRECT_PAYMENT_URL: 'https://www.paypal.com/donate/?hosted_button_id=DB56P9N4A4FQ4',
  CHECK_TO: 'Check To Example',
  CHECK_ADDRESS: <>Address line 1<br />Address line 2<br />Address line 3<br />Address line 4</>,
  PAYMENT_DUE_DATE: 'Example Payment Due Date',
  PERSON_INPUT_LABELS: [ 'Your contact information', 'Second admission', 'Third admission', 'Fourth admission' ],
  NUM_PAGES: 2,
  STEPS: [
    {key: 1, label: 'Info'},
    {key: 2, label: 'Payment'},
    {key: 'checkout', label: 'Checkout'}
  ],
};

export default config;
