import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const IconWrapper = styled.div`
  margin-left: 24px;
  pointer-events: none;
`

const PresentationalBit = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  align-items: center;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <NativeSelect>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
