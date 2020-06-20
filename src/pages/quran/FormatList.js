import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

onTextPress = (value) => {
    alert(value)
}

const FormatList = (props) => {
    return (            
            <TouchableOpacity onPress={props.onTextPress}>    
                <Text style={styles.item}> {props.text} </Text>
            </TouchableOpacity>
        )
}

export default FormatList;

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderBottomWidth: 0.5,
      borderColor:'black',
    },
})