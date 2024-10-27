import React from 'react';
import { Input } from '../Input';
import { Grid } from '@mui/material';
import config from 'config';
const { FIELD_CONFIG } = config;

function ContactInfoInputs({ fields, index }) {

  // console.log('ContactInfoInputs rendered');

  return (
    <Grid container spacing={2}>
      {fields.map((field) => (
        <Grid item xs={12} sm={FIELD_CONFIG[field].width} key={`${index}-${field}`}>
          <Input
            label={FIELD_CONFIG[field].label}
            name={`people[${index}].${field}`}
            type={FIELD_CONFIG[field].type || 'text'}
            pattern={FIELD_CONFIG[field].pattern}
            placeholder={FIELD_CONFIG[field].placeholder}
            autoComplete={FIELD_CONFIG[field].autoComplete}
            fullWidth
            required={FIELD_CONFIG[field].required}
            mask='_'
            variant='standard'
            hidden={FIELD_CONFIG[field].hidden}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(ContactInfoInputs);