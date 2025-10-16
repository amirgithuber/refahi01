import { useState } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchBar = ({ onSearch, onFilter }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value); // جستجوی زنده
  };

  const handleSelectChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <BarContainer>
      <Input
        type="text"
        placeholder="جستجوی نام یا آدرس..."
        value={term}
        onChange={handleInputChange}
      />
      <Select onChange={handleSelectChange}>
        <option value="">همه دسته‌بندی‌ها</option>
        <option value="doctor">پزشک</option>
        <option value="pharmacy">داروخانه</option>
        <option value="store">فروشگاه</option>
      </Select>
    </BarContainer>
  );
};

export default SearchBar;