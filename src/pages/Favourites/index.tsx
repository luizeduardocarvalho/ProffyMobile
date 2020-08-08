import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';

function Favourites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default Favourites;
