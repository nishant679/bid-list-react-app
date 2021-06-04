import {Container} from '@material-ui/core';
import Pagination from './components/Pagination';
import axios from 'axios';
import {useEffect, useState } from 'react';
import MerchantBid from './components/MerchantBid';


function App() {

  const [merchants, setMerchants] = useState([]),
    [loading, setLoading] = useState(false),
    [currentPage, setCurrentPage] = useState(1),
    [limit] = useState(3);

    useEffect(()=> {
      const fetchMerchant = async () => {
        setLoading(true);
        const res = await axios.get("https://intense-tor-76305.herokuapp.com/merchants");
        console.log("home",res);
        setMerchants(res.data);
        setLoading(false);
      }
      fetchMerchant();
    }, []);

  //slice merchant list for pagination 
  const indexOfLastItem = currentPage * limit,
    indexOfFirstItem = indexOfLastItem - limit,
    currntList = merchants.slice(indexOfFirstItem, indexOfLastItem);

  //paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //sort merchant list 
  console.log("Current List", currntList);

  return (    
    <Container maxWidth="lg">
      <div className="container h1 mt-2 mb-2 text-center"> MERCHANT BID LIST</div>
      <MerchantBid merchantList={currntList} loading={loading}/>
      <Pagination postsPerPage = {limit} totalPosts = {merchants.length} paginate={paginate}/>
    </Container>
  );
}

export default App;
