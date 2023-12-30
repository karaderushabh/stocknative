import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.introText}>
          Welcome to our amazing company! Discover our passion for creativity
          and innovation as we strive to make a difference. Resize the browser
          window to see that this page is responsive, by the way.
        </Text>
      </View>

      <Text style={styles.teamHeader}>Meet Our Team</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require("../assets/jane.jpg")}
              style={{
                width: "100%",
                height: 200,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Alexandra Smith</Text>
              <Text style={styles.role}>Chief Executive Officer</Text>
              <Text>
                Passionate about leading our team to success and creating
                innovative solutions. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
              <Text>alexandra@example.com</Text>
              <Button mode="contained" style={styles.button}>
                Contact
              </Button>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/mike.jpg")}
              style={{
                width: "100%",
                height: 200,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Sophie Johnson</Text>
              <Text style={styles.role}>Creative Director</Text>
              <Text>
                Bringing creativity and aesthetics to every project. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text>sophie@example.com</Text>
              <Button mode="contained" style={styles.button}>
                Contact
              </Button>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/john.jpg")}
              style={{
                width: "100%",
                height: 200,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>William Turner</Text>
              <Text style={styles.role}>Lead Designer</Text>
              <Text>
                Transforming ideas into visually stunning designs. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text>william@example.com</Text>
              <Button mode="contained" style={styles.button}>
                Contact
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4CAF50", // Change to a green color
    padding: 20,
    alignItems: "center",
  },
  introText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  teamHeader: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexDirection: "column", // Display items vertically
    alignItems: "center", // Center items horizontally
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: "80%", // Adjust the width as per your preference
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  role: {
    textAlign: "center",
    fontWeight: "500",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#43A047", // Change to a darker green color
  },
});

export default AboutUs;
