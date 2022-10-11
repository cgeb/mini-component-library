/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const calcRightEdgeRadius = (width) => {
  if (width < 98) {
    return 0;
  }
  return 4 * ((width - 98) / 2);
}

const OUTER_STYLES = {
  small: {
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
  },
};

const INNER_STYLES = {
  small: {
    "--height": 8 + "px",
    "--margin-block": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--margin-block": 0,
  },
  large: {
    "--height": 16 + "px",
    "--margin-block": 4 + "px",
  },
};

const Outer = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 100%;
  border-radius: var(--border-radius);
  height: var(--height);
  display: flex;
  align-items: center;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Inner = styled.div`
  width: ${p => p.width}%;
  background-color: ${COLORS.primary};
  border-radius: 4px ${p => calcRightEdgeRadius(p.width)}px ${p => calcRightEdgeRadius(p.width)}px 4px;
  height: var(--height);
  margin: 0 var(--margin-block);
`;

const ProgressBar = ({ value, size }) => {
  const outerStyles = OUTER_STYLES[size];
  const innerStyles = INNER_STYLES[size];

  return (
    <Outer style={outerStyles} role="progressbar" aria-valuenow={value}>
      <Inner style={innerStyles} width={value}></Inner>
    </Outer>
  );
};

export default ProgressBar;
