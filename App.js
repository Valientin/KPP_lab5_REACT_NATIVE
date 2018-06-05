import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import placeImage from './src/assets/background.jpg';

import PlaceList from './src/components/PlaceList/placeList';
import PlaceDetail from './src/components/PlaceDetail/placeDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';

class App extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };


  placeSubmitHandle = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.props.onAddPlace(this.state.placeName);

    this.setState({
      placeName: ''
    })
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='#4c4c4c'
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add place"
            fontWeight="bold"
            fontSize={18}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 200,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this.placeSubmitHandle}
          />
        </View>
        <PlaceList 
          places={this.props.places} 
          onItemSelected={this.placeSelectedHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    marginTop: 30,
    backgroundColor: 'rgb(201, 234, 229)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  placeInput: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: "rgba(92, 99,216, 1)",
    borderRadius: 5,
    marginBottom: 5,
    fontSize: 16
  },
  placeButton: {
    width: "30%"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);