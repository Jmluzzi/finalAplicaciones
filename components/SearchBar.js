import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar cocktails"
        value={searchTerm}
        onChangeText={onSearchTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 4,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
