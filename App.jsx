import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <><View>
      <View style={{
        height: 52,
        backgroundColor: 'red',
        marginHorizontal: 16,
        borderRadius: 40,
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 16,
      }}>

        <Image source={{
          uri: 'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang.png'
        }}
          style={{
            width: 140,
            height: 32,
          }} />


        <Image source={require('./src/assets/img/3.png')}
          style={{
            width: 20,
            height: 35,
            
          }} />
      </View>
    </View>
    
    <Text
      style= {{
        color:'black',
        marginTop:60,
        fontSize:15,
        fontStyle:'italic',
        marginLeft:15,
      }}
      
      > Selamat Datang Di Kantin MHS </Text>

<Text
      style= {{
        color:'black',
        marginTop:10,
        fontSize:21,
        fontWeight:'bold',
        marginLeft:15,
      }}
      
      > Selamat Datang Di Kantin MHS </Text>

      <Image
        style= {{
          
        }}
      
      
      ></Image>
   
    </>

    
  )
}

export default App