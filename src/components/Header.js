import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Test</h2>
      {/* Header left */}
      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  > h2 {
    color: white;
  }
  background-color: red;
`;
