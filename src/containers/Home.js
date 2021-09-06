import Banner from '../components/Banner';
import ProductList from '../components/Product/ProductList';
import useAPI from "../hooks/useAPI";


const Home = () => {
  const {data, loading} = useAPI("/products");

  return(
    <div>
      <Banner/>
      {loading && <div>Loading...</div>}
      {!loading && data && 
        <ProductList products={data}/>
      }
    </div>
  );
}

export default Home;