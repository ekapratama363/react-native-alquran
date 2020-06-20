import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet, Button } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import FormatList from './FormatList';

class Quran extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            listSurah: [],
        }
    }

    componentDidMount = () => {
        try {
            fetch('https://al-quran-8d642.firebaseio.com/data.json')
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        isLoading: false,
                        listSurah: json
                    })
                    // console.log(this.state.listSurah)
                })
        } catch (error) {
            console.log(error)
        }
    }

    actionTextPress = (nomor, name) => {
        // console.log('navigate' + this.props.navigation);
        this.props.navigation.navigate('Surah',{
            nomorSurah : nomor,
            versesName : name
        })
    }

    render() {
        return (
            <ScrollView style={{flex:1, backgroundColor: '#fff'}}>
                
                <SkeletonContent
                    containerStyle={styles.container}
                    isLoading={false}
                    // layout={[
                    //     { key: 'someId', width: 220, height: 20, marginBottom: 6 },
                    //     { key: 'someOtherId', width: 180, height: 20, marginBottom: 6 }
                    // ]}
                    >
                    <FlatList
                        data={this.state.listSurah}

                        renderItem={
                            ( {item} ) => 
                            <FormatList onTextPress={() => this.actionTextPress(item.nomor, item.nama)} text={item.arti + ' - ' + item.asma} keys={item.nomor}/>
                        }
                    />

                </SkeletonContent>
                
            </ScrollView>
        );
    }
}

export default Quran;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
    }
})