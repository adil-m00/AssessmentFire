import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
function FavItems({navigation}) {
  const [dataValue, setDataValue] = useState([]);
  const [heartShow, setHeartShow] = useState(false);
  useEffect(() => {
    
    gettingAllFavtItems()

  }, []);
  const gettingAllFavtItems = ()=>{
    DefaultPreference.get('FavouriteItems').then(function (value) {
      if (value != null) {
        const Arrays = JSON.parse(value);
        // console.log('newArray',Arrays)

        // making http requests for the getting the
    var request = new XMLHttpRequest();
    request.onreadystatechange = e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        const arrayVals = JSON.parse(request.responseText);

        let Arrayss = arrayVals.data.map(e => {
          let t = {...e};
          if (Arrays.includes(t['mal_id'])) {
            return t;
          }
        });

        let Datas = Arrayss.filter(function (element) {
          return element !== undefined;
        });
        setDataValue(Datas);
      } else {
        console.warn('error', equest.status);
      }
    };

    request.open('GET', 'https://api.jikan.moe/v4/anime');
    request.send();

        //   return
      } 
    });
  }
  const heartOptionFilled = id => {
    console.log('Checking', id);
    DefaultPreference.get('FavouriteItems').then(function (value) {
      if (value != null) {
        const Arrays = JSON.parse(value);
        // console.log('newArray',Arrays)

        if (Arrays.includes(id)) {
          let index = Arrays.findIndex(e => e == id);
          // 👇️ 2
          console.log(index);
          Arrays.splice(index, 1);
          // ]
          console.log(Arrays);
          DefaultPreference.set('FavouriteItems', JSON.stringify(Arrays));
          gettingAllFavtItems()
        }

        //   return
      }
    });
  };
  const RenderAnimeShows = (item, index) => {
    let valueArray = item;
    DefaultPreference.get('FavouriteItems').then(function (value) {
      if (value != null) {
        const Arrays = JSON.parse(value);
        //   console.log('newArray',Arrays)

        if (Arrays.includes(valueArray.mal_id)) {
          setHeartShow(true);
        }

        //   return
      }
    });
    return (
      <View style={styles.parentContainer}>
        <Text style={{fontWeight: '600'}}>{valueArray.title}</Text>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AnimeSingleDetailsList', {
                categortId: valueArray.mal_id,
              })
            }>
            <Image
              style={{
                width: '100%',
                height: 200,
                marginTop: 10,
                marginBottom: 10,
                padding: 10,
              }}
              source={{uri: valueArray.images.jpg.image_url}}
            />
          </TouchableOpacity>
          {heartShow === false ? (
            <TouchableWithoutFeedback
              onPress={() => heartOptionFilled(valueArray.mal_id)}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  alignSelf: 'flex-end',
                }}
                source={require('../assets/heart_unfill.png')}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => heartOptionFilled(valueArray.mal_id)}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                  alignSelf: 'flex-end',
                }}
                source={require('../assets/heart.png')}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
        <Text>Rating: {valueArray.rating}</Text>

        <Text>Score: {valueArray.score}</Text>

        <Text>Year: {valueArray.year}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={dataValue}
        renderItem={({item, index}) => {
          return RenderAnimeShows(item, index);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    padding: 16,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    margin: 10,
  },
});
export default FavItems;
