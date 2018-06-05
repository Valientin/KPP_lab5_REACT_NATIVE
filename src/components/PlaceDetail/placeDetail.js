import React from 'react';
import { Button } from 'react-native-elements';
import { Modal, View, Image, Text, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
            </View>
        );
    }

    return (
        <Modal
            onRequestClose={props.onModalClosed}
            visible={props.selectedPlace !== null}
            animationType="slide"
        >
            <View style={styles.modalContainer} >
                {modalContent}
                <View>
                    <Button
                        title="Delete this place" 
                        fontWeight="bold"
                        fontSize={18}
                        buttonStyle={{
                            backgroundColor: "red",
                            width: "100%",
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5,
                            marginBottom: 8
                        }}
                        onPress={props.onItemDeleted} 
                    />
                    <Button 
                        title="Close modal"
                        onPress={props.onModalClosed} 
                        fontWeight="bold"
                        fontSize={18}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            width: '100%',
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        backgroundColor: 'rgb(201, 234, 229)',
        height: "100%"
    },
    placeImage: {
        width: "100%",
        height: 200,
        marginBottom: 5
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10
    }
})

export default PlaceDetail;