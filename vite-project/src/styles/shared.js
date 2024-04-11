import styled, { css } from "styled-components";

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
`;
export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
export const OtherMonth = css`
  opacity: 0;
`;
export const CellDay = css`
  color: #94a6be;
  background-color: #eaeef6;
`;
export const Current = css`
  font-weight: 700;
`;
export const ActiveDay = css`
  background-color: #94A6BE;
  color: #FFFFFF;
`;

export const Wrapper = styled.div`
max-width: 100%;
width: 100vw;
min-height: 100vh;
overflow: hidden;
background-color: #f1f1f1;
`;