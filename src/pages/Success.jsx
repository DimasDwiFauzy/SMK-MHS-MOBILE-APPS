import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Success = ({navigation}) => {
  return (
    <View>
      <View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Image
              source={require('../assets/img/kembali.png')}
              style={{
                marginTop: 20,
                width: 160,
                height: 55,
                marginLeft: 49,
              }}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/img/Success.png')}
          style={{
            alignSelf: 'center',
            width: 328,
            height: 280,
            marginTop: 40,
            marginBottom: 12,
            borderRadius: 6,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View
          style={{
            height: 52,
            backgroundColor: '#ED3636',
            marginHorizontal: 49,
            borderRadius: 12,
            marginTop: 200,
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
            Kembali Ke Menu Utama
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Success;