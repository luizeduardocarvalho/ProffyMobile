import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import PageHeader from '../../Components/PageHeader';

import styles from './styles';

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  
  function loadFavourites() {
    AsyncStorage.getItem('favourites').then(response => {
      if (response) {
        const favouritedTeachers = JSON.parse(response);
        setFavourites(favouritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavourites();
  });
  
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favourites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favourited           
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favourites;
