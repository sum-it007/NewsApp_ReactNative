import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const SearchScreen = ({navigation}) => {
  const [country, setCountry] = useState('in');
  const [result, setResult] = useState([]);

  const getNews = () => {
    console.log('Fetching Data');
    axios
      .get(
        `
        https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c68ffa0db748436395e392a50d1c8cc4
        `
      )
      .then((res) => {
        console.log(res, 'output');
        setResult(res.data.articles);
      })
      .catch((err) => console.log('Error',err));
  };
  console.log('output', result);
  return (
    <SafeAreaView>
      <View>
        <View style={styles.searchArea}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Search News"
            autoCapitalize="none"
            autoCorrect={false}
            value={country}
            onChangeText={(e) => setCountry(e)}
          />
          <Button title="Get News" onPress={() => getNews()} />
        </View>
        <View>
          <Text style={{alignSelf: 'center'}}>{country}'s News</Text>
          <FlatList
            data={result}
            keyExtractor={(result) => result.title}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Result', {id: item});
                  }}>
                  <View style={styles.newsItem}>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: item.urlToImage}}
                    />
                    <View style={styles.newsDesc}>
                      <Text style={{flex: 1, flexWrap: 'wrap'}}>
                        {item.title}
                      </Text>
                      <Text> Source : {item.source.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    margin: 20,
  },
  inputStyle: {
    flex: 1,
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  newsItem: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#DDD',
    margin: 8,
    borderRadius: 10,
  },
  newsDesc: {
    margin: '2%',
    flexDirection: 'column',
    flexGrow: 1,
    width: 0,
  },
});

export default SearchScreen;
