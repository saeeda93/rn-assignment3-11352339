import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';

const categories = [
  { name: 'Exercise', tasks: '12 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07bf8886dbde741814b101101343ebc9ee6120beeaa8d30074df3b012b2db71b?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Study', tasks: '12 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98c375d68ef9e063a7f499d7d1e7945212be5f7822ba7ae715f3d9a986895f91?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Code', tasks: '15 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07bf8886dbde741814b101101343ebc9ee6120beeaa8d30074df3b012b2db71b?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Cook', tasks: '10 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98c375d68ef9e063a7f499d7d1e7945212be5f7822ba7ae715f3d9a986895f91?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Read', tasks: '5 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07bf8886dbde741814b101101343ebc9ee6120beeaa8d30074df3b012b2db71b?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Meditate', tasks: '7 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98c375d68ef9e063a7f499d7d1e7945212be5f7822ba7ae715f3d9a986895f91?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Travel', tasks: '2 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07bf8886dbde741814b101101343ebc9ee6120beeaa8d30074df3b012b2db71b?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
  { name: 'Shop', tasks: '6 Tasks', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98c375d68ef9e063a7f499d7d1e7945212be5f7822ba7ae715f3d9a986895f91?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' },
];

const tasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Read a Book',
  'Cook Dinner',
  'Go Running',
  'Write a Blog Post',
  'Yoga',
  'Learn a New Language',
  'Draw',
  'Meditate',
  'Work on a Side Project',
  'Plan a Trip',
  'Grocery Shopping',
  'Watch a Documentary',
];

const Header = () => (
  <View style={styles.headerContainer}>
    <View>
      <Text style={styles.greetingText}>Hello, Devs</Text>
      <Text style={styles.taskSummaryText}>14 tasks today</Text>
    </View>
    <Image resizeMode="auto" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/613d3e165550edb3552cf4374dd9c8e6e0f72f6472b4d7193227a80c016f543c?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' }} style={styles.headerImage} />
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBarContainer}>
    <View style={styles.searchBar}>
      <Image resizeMode="auto" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/60f9d9ff4a466af785a76955471e44281e59b65871486ffdc8ff04ff7d54c35d?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' }} style={styles.searchIcon} />
      <Text style={styles.searchText}>Search</Text>
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
    <Image resizeMode="auto" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/026a689143d8184b3eecbf7c5dc81ec6e70d1e0163a9526d3f7420a3242ef154?apiKey=84db356c45aa4a6ba9aaac34a35b9fe0&' }} style={styles.searchImage} />
  </View>
);

const CategoryCard = ({ name, tasks, imageUri }) => (
  <View style={styles.categoryCard}>
    <Text style={styles.categoryName}>{name}</Text>
    <Text style={styles.categoryTasks}>{tasks}</Text>
    <Image resizeMode="auto" source={{ uri: imageUri }} style={styles.categoryImage} />
  </View>
);

const TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{task}</Text>
  </View>
);

const MyComponent = () => (
  <ScrollView contentContainerStyle={styles.mainContainer}>
    <Header />
    <SearchBar />
    <Text style={styles.sectionTitle}>Categories</Text>
    <View style={styles.categoriesContainer}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          tasks={category.tasks}
          imageUri={category.imageUri}
        />
      ))}
    </View>
    <Text style={styles.sectionTitle}>Ongoing Task</Text>
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => <TaskItem task={item} />}
    />
  </ScrollView>
);