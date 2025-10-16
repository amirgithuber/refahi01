import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: ${props => props.active ? '#3498db' : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
  
  &:hover {
    background: #ecf0f1;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <PaginationContainer>
      {pages.map(page => (
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;