import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ImageBackground, ScrollView, 
TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';


const Home = ({navigation}) => {

    const image = { uri:
    "https://thumbor.forbes.com/thumbor/711x564/https://specials-images.forbesimg.com/imageserve/920377840/960x0.jpg?fit=scale"
    };

    const recentImage = { uri:
    "https://gttp.imgix.net/222334/x/0/top-15-must-visit-tourist-spots-in-the-philippines-13.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
    };
    

    const [gallery, setgallery] = useState([
    {image: {uri:
    'https://i1.wp.com/unusualplaces.org/wp-content/uploads/2019/05/chocolatehills3.jpg' }, 
    title: 'Chocolate Hills', key: '1'
    },
    {image: {uri:
    'https://upload.wikimedia.org/wikipedia/commons/0/09/Puerto-Princesa_Subterranean_River_National_Park-112012.jpg' },
     title: 'Underground River', key: '2'
    },
    {image: {uri:
    'https://www.traveldailymedia.com/oachugot/2020/08/boracay2.jpg' }, 
    title: 'Boracay', key: '3'
    },
    {image: {uri:
    'https://www.worldatlas.com/upload/e2/82/ca/shutterstock-550450429.jpg' }, 
    title: 'Mt. Mayon', key: '4'
    },
    {image: {uri:
    'https://gttp.imgix.net/222142/x/0/top-15-must-visit-tourist-spots-in-the-philippines-10.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883' }, 
    title: 'Rizal Park', key: '5'
    },
    
])

  

    return(
        <View style={{flexGrow: 1, height: '100%'}}>
           <View>
               <ImageBackground
               source={image}
               style={{width: 400, height: 215}}
               imageStyle={{borderBottomRightRadius: 80}}
               >
               
           {/* <View style={styles.DarkOverlay}></View> */}
               </ImageBackground>
           </View>
          
          <ScrollView>
              <View style={{padding: 10}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 250}}>Top 
                  Trending</Text>
              </View>
              <View>
                  <FlatList
                  horizontal={true}
                  data={gallery}
                  renderItem={({item}) => {
                      return(
                          <View style={{paddingVertical: 20, paddingLeft:16 }}>
                            <TouchableOpacity
                             onPress={() => navigation.navigate('Post')}>
                                <Image source={item.image} style={{width: 150,
                                marginRight: 8, height: 240, borderRadius: 10}} />
                                <View style={styles.ImageOverlay}></View>
                                <Feather name='map-pin' size={16} color="white"
                                style={styles.imageLocationIcon} />
                                <Text style={styles.ImageText}>{item.title}</Text>
                            </TouchableOpacity>
                            </View>
                      )
                  }}
                  />
              </View>
              <View style={{marginBottom: 30}}>
                  <View style={{padding: 20}}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Suggested Places</Text>
                  </View>
                  <Image
                  source={recentImage}
                  style={{width: '90%', height: 250, borderRadius: 10,
                  alignSelf: 'center'}} />
                  <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                      <View style={{flexDirection: 'row'}}>
                          <Feather name='map-pin'
                          color='white'
                          size={22}
                          style={{marginLeft:10, position: 'relative', top: 4}} />
                          <Text style={{fontSize: 22, color: 'white', fontWeight: 'normal', marginBottom: 10,
                          marginHorizontal: 10}}>
                              Cloud 9, Siargao
                          </Text>
                      </View>
                  </View>
              </View>
             </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DarkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
        backgroundColor: '#000',
        opacity: 0.5,
    },
    ImageOverlay: {
        width: 150,
        height: 230,
        marginRight: 9,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.2,
    },
    imageLocationIcon: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10,
    },
    ImageText: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 30,
        bottom: 10,
    },
 
});

export default Home;
