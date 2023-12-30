import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ContactUs = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");

  const handleFormSubmit = () => {
    setResponse("Thank you for reaching out! We will get back to you soon.");
    // Add logic here to handle form submission
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Us</Text>
        <Text style={styles.subHeaderText}>
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Your Name"
          value={data}
          onChangeText={(text) => setData(text)}
          style={styles.input}
        />
        <TextInput placeholder="Your Email" style={styles.input} />
        <TextInput placeholder="Subject" style={styles.input} />
        <TextInput
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          style={[styles.input, styles.messageInput]}
        />
        <Button title="Send" onPress={handleFormSubmit} />
      </View>
      <View style={styles.responseContainer}>
        <Text style={styles.responseText}>{response}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: "#FF9800", // Change to a orange color
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeaderText: {
    color: "black",
    fontSize: 18,
  },
  formContainer: {
    marginVertical: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 8,
  },
  messageInput: {
    height: 80,
  },
  responseContainer: {
    alignItems: "center",
  },
  responseText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default ContactUs;
