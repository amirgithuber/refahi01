import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>لیست طرف‌های قرارداد</h1>
  </HeaderContainer>
);

export default Header;