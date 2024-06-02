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