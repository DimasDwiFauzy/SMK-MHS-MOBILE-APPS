import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
  return (
    <View>
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
            source={require('../assets/img/kembali.png')}
            style={{
              marginTop: 20,
              width: 150,
              height: 50,
              marginLeft: 49,
              marginTop:30,
            }}
          />
          </TouchableOpacity>
        </View>
        <Image
              source={{
                uri: 'https://i.pinimg.com/736x/88/05/ee/8805ee77f5d2aafd43db7c214c3dcd43.jpg',
              }}
              style={{width: 350, height: 150, borderRadius: 30, marginTop: 11, marginHorizontal:40,}}
            />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0,
          paddingRight: 16,
          paddingLeft: 49,
        }}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000000',
            marginTop: 10,
            marginLeft:13,
          }}>
          Burger
        </Text>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#E73232',
            marginLeft: 163,
            marginTop: 11,
            
          }}>
          Rp 20.000
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 14,
          fontWeight: 'regular',
          color: '#656565',
          paddingLeft: 49,
          paddingRight: 49,
          marginTop: 12,
          marginHorizontal:20,
          justifyself:'center',
        }}>
        Nikmati teh lemon kami — perpaduan sempurna antara daun teh yang segar
        dan aroma menyegarkan lemon. Setiap tegukan adalah kenikmatan citrus
        yang menyegarkan!
      </Text>
      <Image
              source={{
                uri: 'http://clipart-library.com/new_gallery/1041454_white-line-png-transparent.png',
              }}
              style={{width: 420, height: 6, borderRadius: 6, marginTop: 50, marginLeft:1,}}
            />
      <Image
              source={{
                uri: 'http://clipart-library.com/new_gallery/1041454_white-line-png-transparent.png',
              }}
              style={{width: 420, height: 6, borderRadius: 6, marginTop: 0, marginLeft:1,}}
            />
      <Text
        style={{
          fontFamily: 'DM Sans',
          fontSize: 16,
          fontWeight: 'regular',
          color: '#000000',
          paddingLeft: 49,
          marginTop: 20,
        }}>
        Masukkan Jumlah Pesanan
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}></View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            height: 52,
            marginHorizontal: 49,
            borderRadius: 6,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 16,
          }}></TextInput>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Success')}>
        <View
        style={{
          height: 52,
          backgroundColor: '#ED3636',
          marginHorizontal: 49,
          borderRadius: 12,
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 16,
        }}>
        <Text
          style={{
            fontFamily: 'DM Sans',
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 68,
          }}>
          Konfirmasi Pemesanan
        </Text>
      </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default Detail;