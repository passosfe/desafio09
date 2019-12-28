import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, disabled, placeholder, onChange }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [startDate, setStartDate] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={startDate}
        minDate={new Date()}
        locale="pt-BR"
        readOnly={disabled}
        disabled={disabled}
        onChange={date => {
          setStartDate(date);
          onChange(date);
        }}
        ref={ref}
        autoComplete="off"
        placeholderText={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  disabled: false,
};
