import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    // 2초 후에 자동으로 로그인 화면으로 이동
    const timer = setTimeout(() => {
      navigation.navigate("Signin");
    }, 2000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 클리어
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <Image
        source={require('../images/logo.jpg')} // 로고 이미지 경로 설정
        style={Styles.logo}
      />
      <Text style={Styles.title}>DoorToDoor</Text>
      <Text style={Styles.tagline}>눈: 길</Text>
      {/* <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
          style={Styles.nextButton}
        >
          <Text style={Styles.buttonText}>로그인 화면으로</Text>
        </TouchableOpacity> */}
    </View>
  );
}

export default Splash;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "purple",
    padding: 10,
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: "center",
  }
});
