import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from '../CSS/css_home';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const url =
  'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods';

const urlWithPost = 'https://codemobiles.com/adhoc/youtubes/index_new.php';

export default function FeedScreen(props) {
  const [dataArray, setDataArray] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    // loadData();
    setNavigationOption();
    loadDataWithPost();
  }, []);

  loadData = async () => {
    try {
      setIsFetching(true);
      setDataArray([]);
      const result = await axios.get(url);
      setDataArray(result.data.youtubes);

      setIsFetching(false);
    } catch (e) {
      setDataArray([]);
    }
  };

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'รายการสินค้า',
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#000'},
      headerBackTitle: ' ',
    });
  };

  loadDataWithPost = async () => {
    try {
      setIsFetching(true);
      setDataArray([]);

      const regUsername = 'admin';
      const regPassword = 'password';
      let data = `username=${regUsername}&password=${regPassword}&type=foods`;
      //   let dataJson = {
      //       username: regUsername,
      //       password: regPassword
      //   }

      const result = await axios.post(urlWithPost, data);
      setDataArray(result.data.youtubes);

      setIsFetching(false);
    } catch (e) {
      setDataArray([]);
    }
  };

  renderRow = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('detail', {item});
      }}
      style={styles.listCard}>
      {/* Avatar and title, subtitle */}
      <View style={styles.listCardView}>
        {/* Avatar */}
        <Image style={styles.listAvatar} source={{uri: item.avatar_image}} />

        {/* Title and Subtitle */}
        <View style={styles.listTitleSubtitleContainer}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listSubTitle}>{item.subtitle}</Text>
        </View>
      </View>

      {/* Youtube Image */}
      <Image
        source={{uri: item.youtube_image}}
        style={styles.listYoutbeImage}
      />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={dataArray}
      renderItem={renderRow}
      refreshing={isFetching}
      onRefresh={loadData}
      keyExtractor={item => item.id}
    />
  );
}
