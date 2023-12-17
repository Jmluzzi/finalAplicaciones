import { useState, useEffect } from 'react';
import axios from 'axios';

const useCocktailApi = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        setCocktails(response.data.drinks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  return { cocktails, loading };
};

export default useCocktailApi;
