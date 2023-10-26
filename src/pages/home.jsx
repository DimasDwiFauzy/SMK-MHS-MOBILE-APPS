import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            height: 52,
            backgroundColor: 'red',
            marginHorizontal: 15,
            borderRadius: 40,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 16,
          }}>
          <Image
            source={{
              uri: 'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang.png',
            }}
            style={{
              width: 140,
              height: 32,
            }}
          />

          <Image
            source={require('../assets/img/3.png')}
            style={{
              width: 20,
              height: 35,
            }}
          />
        </View>
      </View>

      <Text
        style={{
          color: 'black',
          marginTop: 60,
          fontSize: 15,
          fontStyle: 'italic',
          marginLeft: 15,
        }}>
        {' '}
        Selamat Datang Di Kantin MHS{' '}
      </Text>

      <Text
        style={{
          color: 'black',
          marginTop: 10,
          fontSize: 21,
          fontWeight: 'bold',
          marginLeft: 15,
        }}>
        {' '}
        Selamat Datang Di Kantin MHS{' '}
      </Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            padding: 12,
          }}>
          <View
            style={{
              height: 150,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
              }}>
              Menu Makanan
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/236x/90/78/78/9078780616e015bf4afcafa1e979eec9.jpg',
                }}
                style={{
                  width: 190,
                  height: 180,
                  borderRadius: 6,
                  marginTop: 11,
                }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                marginTop: 10,
              }}>
              Burger
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                fontSize: 18,
                marginTop: 4,
              }}>
              Rp.20.000
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 12,
          }}>
          <View
            style={{
              height: 150,
            }}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/236x/18/f2/96/18f296ac1a243e743a1a7c6e1e7d28db.jpg',
              }}
              style={{
                width: 190,
                height: 180,
                borderRadius: 6,
                marginTop: 39,
              }}
            />

            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                marginTop: 10,
              }}>
              Pizza
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                fontSize: 18,
                marginTop: 4,
              }}>
              Rp.35.000
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 150}}>
        <View style={{flex: 1, padding: 12}}>
          <View style={{height: 100}}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
              Menu Minuman
            </Text>
            <Image
              source={{
                uri: 'https://i.pinimg.com/236x/c3/31/8a/c3318a41d9822894832ea78db2cc94b9.jpg',
              }}
              style={{width: 190, height: 180, borderRadius: 6, marginTop: 11}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                marginTop: 10,
              }}>
              Frosty Milky
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                fontSize: 18,
                marginTop: 4,
              }}>
              Rp.10.000
            </Text>
          </View>
        </View>
        <View style={{flex: 1, padding: 12}}>
          <View style={{height: 400}}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/b9/8d/57/b98d577c133ccabfdb5d778f3c0dbe56.jpg',
              }}
              style={{width: 190, height: 180, borderRadius: 6, marginTop: 40}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: 18,
                marginTop: 10,
              }}>
              Teh Tarik
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'red',
                fontSize: 18,
                marginTop: 4,
              }}>
              Rp.5.000
            </Text>
          </View>
        </View>
      </View>

      <View
          style={{
            height: 150,
            backgroundColor: 'red',
            borderTopRightRadius:55,
            borderTopLeftRadius:55,
            marginBottom:0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}>
          
        </View>  
      
    </ScrollView>
  );
};

export default Home;
