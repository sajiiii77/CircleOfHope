import React from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const WEBSITE_URL = "http://172.21.14.9:3000";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: WEBSITE_URL }}
        style={styles.webview}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode="always"
        startInLoadingState={true}
        cacheEnabled={false}
        setSupportMultipleWindows={false}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.log("WEBVIEW ERROR:", nativeEvent);
          Alert.alert("WebView Error", nativeEvent.description);
        }}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});