import React, { useRef, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Input } from './styles';

import api from '~/services/api';

export default function SelectInput({ name, from, setSubscription, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [options, setOptions] = useState([]);
  const [filter, setFilter] = useState('');

  const loadOptions = useCallback(
    (inputValue = '') => {
      async function load() {
        const response = await api.get(from, {
          params: {
            per_page: 2,
            name: inputValue,
          },
        });

        const data = response.data.map(option => ({
          id: option.id,
          title: from === 'students' ? option.name : option.title,
          data: option,
        }));

        return data;
      }

      return load();
    },
    [from]
  );

  function getDefaultValue() {
    if (!defaultValue) return null;

    return options.filter(option => defaultValue.includes(option.id));
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
    });

    loadOptions();
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <Input
        name={fieldName}
        cacheOptions
        loadOptions={loadOptions}
        ref={ref}
        // defaultValue={getDefaultValue()}
        onInputChange={e => e.target && setFilter(e.target.value)}
        // onChange={value =>
        //   setSubscription &&
        //   setSubscription(options.find(option => option.id === value))
        // }
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
