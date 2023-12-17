import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import useCocktailApi from '../hooks/useCocktailApi';
import SearchBar from './SearchBar';

const ApiComponent = () => {
  const { cocktails, loading } = useCocktailApi();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filterCocktails = () => {
    return cocktails.filter(
      (cocktail) =>
        cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cocktail API</Text>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <ScrollView style={styles.scrollContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          filterCocktails().map((item) => (
            <View key={item.idDrink} style={styles.cocktailContainer}>
              <Image source={{ uri: item.strDrinkThumb }} style={styles.cocktailImage} />
              <Text style={styles.cocktailName}>{item.strDrink}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cocktailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  cocktailImage: {
    width: 300,
    height: 300,
    borderRadius: 5,
    marginBottom: 5,
  },
  cocktailName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ApiComponent;
