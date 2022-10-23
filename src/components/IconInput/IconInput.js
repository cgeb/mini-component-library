import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    iconSize: 16,
    borderThickness: 1,
    fontSize: 14,
  },
  large: {
    height: 36,
    iconSize: 24,
    borderThickness: 2,
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input
        style={{
          "--width": width + "px",
          "--border-thickness": styles.borderThickness + "px",
          "--height": styles.height / 16 + "rem",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--height);
  border: 0;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
