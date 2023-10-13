import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SIput type="text" placeholder={placeholder} />;
};

const SIput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
