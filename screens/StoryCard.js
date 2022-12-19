import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
            </View>
            <View style={styles.authorNameContainer}>
              <Text> {this.props.post.author}</Text>
            </View>
            <View style={styles.captionContainer}></View>
            <Image source={require('../assets/image_7.jpg')} 
              style = {styles.profileImage}/>
            <View style={styles.actionContainer}></View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "white",
    borderRadius: RFValue(20)
  },
  profileImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  authorContainer: {
    flex:.15,
    justifyContent:'center',
    alignItems:'center',
    marginTop: RFValue(20)
  },
authorNameContainer:{
flex:.85,
justifyContent:'center',
},
actionContainer:{
  justifyContent:'center',
  alignItems:'center',
  padding: 10
}
});
