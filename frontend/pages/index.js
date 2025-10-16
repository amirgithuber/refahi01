import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ContractList from '../components/ContractList';
import Pagination from '../components/Pagination';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

const API_URL = '/api/contracts';

export default function HomePage() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page = 1, search = '', category = '') => {
    setLoading(true);
    try {
      const params = { page };
      if (search) params.search = search;
      if (category) params.category = category;

      const response = await axios.get(API_URL, { params });
      setContracts(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, searchTerm, categoryFilter);
  }, [currentPage, searchTerm, categoryFilter]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleFilter = (category) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : (
          <>
            <ContractList contracts={contracts} />
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </>
        )}
      </main>
    </div>
  );
}