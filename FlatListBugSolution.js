import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListBugSolution = () => {
  const [data, setData] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ]);

  const updateData = () => {
    setData([
      ...data,
      { id: '4', text: 'New Item' },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Unique Key
      />
      <Button title="Add Item" onPress={updateData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListBugSolution;