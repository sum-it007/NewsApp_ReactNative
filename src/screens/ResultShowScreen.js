import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    return <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>{id.title}</Text>
        <Image source={{uri:id.urlToImage}} style={styles.imageStyle}/>
        <Text style={styles.description}>{id.description} </Text>
    </View>
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:25,
        fontWeight:'bold'
    },  
    viewStyle:{
        alignItems:'center',
        margin:'4%'
    },
    imageStyle:{
        marginTop:'5%',
        marginBottom:'5%',
        width:'80%',
        height:'50%',
    },
    description:{
        fontSize:20
    },
  });

export default ResultShowScreen