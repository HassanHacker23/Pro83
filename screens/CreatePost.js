import React, { Component } from "react";
import { StyleSheet, Text, View,TextInput,Platform,SafeAreaView,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from 'react-native-dropdown-picker';

export default class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          previewImage: 'image_1',
          dropdownheight: 40,
        };
      }
    
  render() {
    let preview_images = {
        image_1: require('../assets/image_1.jpg'),
        image_2: require('../assets/image_2.jpg'),
        image_3: require('../assets/image_3.jpg'),
        image_4: require('../assets/image_4.jpg'),
        image_5: require('../assets/image_5.jpg'),
      };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}> </SafeAreaView>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}></View>
          <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>New Post </Text>
        </View>

        <View stlye={styles.fieldsContainer}>
          <Image
            source={preview_images[this.state.previewImage]}
            style={styles.previewImage}
          ></Image>
        </View>
        <View style={{ height: RFValue(this.state.dropdownheight) }}>
          <DropDownPicker>
            items=
            {[
              { label: "Image 1", value: "iamge_1.jpg" },
              { label: "Image 2", value: "iamge_2.jpg" },
              { label: "Image 3", value: "iamge_3.jpg" },
              { label: "Image 4", value: "iamge_4.jpg" },
              { label: "Image 5", value: "iamge_5.jpg" },
              { label: "Image 6", value: "iamge_6.jpg" },
              { label: "Image 7", value: "iamge_7.jpg" },
            ]}
            defaultValue={this.state.previewImage}
            containerStyle=
            {{
              height: 40,
              borderRadius: 20,
              marginBottom: 10,
            }}
            onOpen=
            {() => {
              this.setState({ dropdownHeight: 170 });
            }}
            onClose==
            {() => {
              this.setState({ dropdownHeight: 40 });
            }}
            style={{ backgroundColor: "transparent" }}
            itemStyle=
            {{
              justifyContent: "flex-start",
            }}
            dropDownStyle=
            {{
              backgroundColor: "gray",
            }}
            labelStyle=
            {{
              color: "white",
            }}
            arrowStyle=
            {{
              color: "white",
            }}
            onChangeItem=
            {(item) => {
              this.setState({
                previewImage: item.value,
              });
            }}
          </DropDownPicker>
        </View>
        <TextInput
          style={styles.inputFont}
          onChangeText={(caption) => this.setState({ caption })}
          placeholder="caption"
          placeholderTextColor="white"
        ></TextInput>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#15193c',
    },
    previewImage: {
      resizeMode: 'contain',
      width: '95%',
      alignSelf: 'center',
      height: RFValue(250),
      borderRadius: 10,
    },
    droidSafeArea: {
      marginTop:
        Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
      flex: 0.07,
      flexDirection: 'row',
    },
    appIcon: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: 'center',
    },
    appTitleText: {
      color: 'white',
      fontSize: RFValue(28),
    },
    fieldContainer: {
      flex: 0.85,
    },
    inputFont: {
      height: RFValue(40),
      borderColor: 'white',
      borderWidth: RFValue(1),
      borderRadius: RFValue(10),
      paddingLeft: RFValue(10),
      color: 'white',
      marginTop: RFValue(10),
    },
  });
  
