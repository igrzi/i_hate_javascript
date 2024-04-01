import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-ico-social-media';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Json imports
import alcioneData from '../../assets/jsons/alcione.json';
import almirsaterData from '../../assets/jsons/almir_sater.json';
import djavanData from '../../assets/jsons/djavan.json';
import luluData from '../../assets/jsons/lulu.json';
import victorleoData from '../../assets/jsons/victor_leo.json';
import zenetoData from '../../assets/jsons/zeneto_cristiano.json';

// Images imports
import alcioneImage from '../../assets/images/alcione.jpeg';
import almirsaterImage from '../../assets/images/almir_sater.jpeg';
import djavanImage from '../../assets/images/djavan.jpeg';
import luluImage from '../../assets/images/lulu.jpeg';
import victorleoImage from '../../assets/images/victor_leo.jpeg';
import zenetoImage from '../../assets/images/zeneto_cristiano.jpeg';

// Define an object that maps attraction names to their corresponding images
const attractionImages = {
  "alcione": alcioneImage,
  "almir sater": almirsaterImage,
  "djavan": djavanImage,
  "lulu santos": luluImage,
  "victor e leo": victorleoImage,
  "zé neto e cristiano": zenetoImage,
};

// Define an array that holds the festival data for each attraction
const festivalData = [
  alcioneData,
  almirsaterData,
  djavanData,
  luluData,
  victorleoData,
  zenetoData,
];

// Define the longitude and latitude of the venue
const venueLongitude = -48.67751562065655;
const venueLatitude = -27.596029037078868;

// Define the ListScreen component
export default function ListScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

  // Function to handle the click event on a festival container
  const handleBoxClick = (jsonData) => {
    setSelectedData(jsonData);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Function to render the festival container for each attraction
  const renderFestivalContainer = (data) => (
    <View>
      <TouchableOpacity
        key={data.attraction}
        style={styles.festival_container}
        onPress={() => handleBoxClick(data)}
      >
        <View style={styles.cardContainer}>
          <Image style={styles.cardImage} source={attractionImages[data.attraction.toLowerCase()]}/>
          <View>
            <Text style={styles.text}>{data.attraction} - {data.date}</Text>
            <Text style={styles.text}>{data.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {festivalData.map(renderFestivalContainer)}

      <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
        <View style={styles.modalContainer}>
          <Image source={attractionImages[selectedData && selectedData.attraction.toLowerCase()]} style={styles.image} />
          <Text style={styles.modalText}>{selectedData && selectedData.attraction}</Text>
          <Text style={styles.modalText}>Date: {selectedData && selectedData.date.trim()}</Text>
          <Text style={styles.modalText}>Starting time: {selectedData && selectedData.start_time}</Text>
          <View style={styles.iconContainer}>
            <Icon
              name="instagram"
              onPress={() => Linking.openURL(selectedData.social_media)}
              width={30}
              height={30}
            />
            <Icon
              name='spotify'
              onPress={() => Linking.openURL(selectedData.spotify_playlist)}
              width={30}
              height={30}
            />
          </View>
          <Text style={styles.modalText}>Pista Price: R${selectedData && selectedData.ticket_price.pista}</Text>
          <Text style={styles.modalText}>Camarote Price: R${selectedData && selectedData.ticket_price.camarote}</Text>
          <IonIcons name="ticket" size={35} marginBottom={10} onPress={() => Linking.openURL(selectedData.buy_url)}></IonIcons>
          <MapView 
            style={styles.map} 
            initialRegion={{
              latitude: venueLatitude,
              longitude: venueLongitude,
              latitudeDelta: 0,
              longitudeDelta: 0.05,
            }}
            zoomEnabled={false}
            onPress={() => Linking.openURL(selectedData.map_url)}
            minZoomLevel={15}
          >
            <Marker
              coordinate={{
                latitude: -27.596029037078868,
                longitude: -48.67751562065655,
              }}
              title="Arena Opus"
              description="Click to go to the map"
            />
          </MapView>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Add to Favorites</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  festival_container: {
    width: 375,
    height: 80,
    backgroundColor: '#424651',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  map: {
    width: 200,
    height: 200,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
    marginBottom: 10,
  },
  cardImage: {
    marginRight: 10,
    width: 85,
    height: 60,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
