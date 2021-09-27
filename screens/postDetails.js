import React, {useState} from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView,
TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Post = ({navigation}) => {

    const image =  {uri:
    'https://i1.wp.com/unusualplaces.org/wp-content/uploads/2019/05/chocolatehills3.jpg' };
   
    const locationImage = {uri: 
        "https://selfplannedtrip.com/wp-content/uploads/2015/06/selfplannedtrip-bohol-map.jpg"};
    const goBack = () => {
        navigation.goBack()
        
    }
//Chocolate Hills

    return(
        
        <View style={{backgroundColor: 'white', flex:1}}>
            <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >

            <Text style={styles.Tagline}> Discover Chocolate Hills </Text>
            <Text style={styles.Placename}> Explore the scenic beauty of Chocolate Hills </Text>

            <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 40
            }}>
                <Feather name='arrow-left' size={24} color='#fff' />
            </TouchableOpacity>
            </ImageBackground>

            <ScrollView style={{backgroundColor: 'white'}}>
                <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                    About The Place
                </Text>
                <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', 
                opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify'}}>
                    The Chocolate Hills are a geological formation in the Bohol province of the Philippines,
                    There are at least 1,260 hills but there may be as many as 1,776 hills spread over an area
                    of more than 50 square kilometres (20 sq mi).
                </Text>
                <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', 
                opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify'}}> 
                    The Chocolate Hills is a famous tourist attraction of Bohol. They are featured in the 
                    provincial flag and seal to symbolize the abundance of natural attractions in the province.
                    They are in the Philippine Tourism Authority's list of tourist destinations in the Philippines;
                    they have been declared the country's 
                    third National Geological Monument and proposed for inclusion in the UNESCO World Heritage List.
                </Text>
                <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', 
                opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify'}}> 
                     The Chocolate Hills form a rolling terrain of haycock-shaped hills – 
                     mounds of a generally conical and almost symmetrical shape.
                     Estimated to be from 1,268 to about 1,776 individual mounds, 
                     these cone-shaped or dome-shaped hills are actually made of grass-covered limestone
                </Text>

                <View style={{marginBottom: 10}}>
                  <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location</Text>
                      {/* <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ff6200', marginRight: 10}}>View All</Text> */}
                  </View>
                  <Image 
                  source={locationImage}
                  style={{width: '90%', height: 250, marginBottom: 15, borderRadius: 10, alignSelf: 'center'}}                  
                  />
                  {/* <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                      <Text style={{fontSize: 18, color: 'white', fontWeight: 'normal', 
                      marginBottom: 50, marginLeft: 10}}></Text>
                  </View> */}
              </View>    
            </ScrollView>
        </View>
        //end of chocolate hills
                    
    )
                
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 350,
        justifyContent: 'flex-end',
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30,
        marginVertical: 6
    },
    Placename: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30,
   }
})
export default Post;
