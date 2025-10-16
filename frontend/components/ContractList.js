import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Th = styled.th`
  background: #3498db;
  color: white;
  padding: 12px 15px;
  text-align: right;
`;

const Td = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
`;

const LocationLink = styled.a`
  color: #2980b9;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContractList = ({ contracts }) => (
  <Table>
    <thead>
      <tr>
        <Th>نام</Th>
        <Th>دسته‌بندی</Th>
        <Th>آدرس</Th>
        <Th>شماره تماس</Th>
        <Th>لوکیشن</Th>
      </tr>
    </thead>
    <tbody>
      {contracts.map((contract) => (
        <tr key={contract.id}>
          <Td>{contract.name}</Td>
          <Td>{contract.category === 'doctor' ? 'پزشک' : contract.category === 'pharmacy' ? 'داروخانه' : 'فروشگاه'}</Td>
          <Td>{contract.address}</Td>
          <Td>{contract.phone}</Td>
          <Td>
            {contract.location_link ? (
              <LocationLink href={contract.location_link} target="_blank" rel="noopener noreferrer">
                مشاهده روی نقشه
              </LocationLink>
            ) : (
              'موجود نیست'
            )}
          </Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ContractList;