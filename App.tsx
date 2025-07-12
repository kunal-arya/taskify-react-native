import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive"
        },
        {
          text: "Cancel",
          onPress: () => console.log("Ok, canceling the delete request"),
          style: "cancel" 
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={handleDelete}
            activeOpacity={0.8}
          >
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.coloCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemText: { fontSize: 18, fontWeight: 200 },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6
  },
  btnText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1
  }
});

// ------------------------------------------------------
// 📘 PixelRatio.get() - React Native Notes
// ------------------------------------------------------

// Importing PixelRatio from react-native
// This module helps manage screen density and pixel scaling
// across different devices (low DPI to high DPI)
// import { PixelRatio } from 'react-native';

// PixelRatio.get()
// ----------------
// Returns the device's pixel density (float or integer)
// Example outputs: 1, 1.5, 2, 3, 3.5 (depends on the device)

// Usage:
// const pixelDensity = PixelRatio.get();

// Log the pixel density (useful for debugging)
// Example: console might show 2 on standard iPhones, 3 on Retina devices
// console.log(pixelDensity);

// ------------------------------------------------------
// 🔍 Why is this important?
// ------------------------------------------------------
// - Devices have different screen densities (DPI/PPI)
// - A UI designed for 1x density will look too small/blurry on 2x or 3x devices
// - Using pixel density helps us load correct image assets and scale UI properly
// - Essential for responsive design and consistent user experience

// ------------------------------------------------------
// 🧠 Common pixel density values by device category:
// ------------------------------------------------------
// - 1.0   → mdpi   → low-end Android phones
// - 1.5   → hdpi   → older Android devices
// - 2.0   → xhdpi  → iPhone 6/7/8, mid-range Android
// - 3.0   → xxhdpi → iPhone X, iPhone 11, newer Android phones
// - 3.5+  → xxxhdpi → high-end Androids or iPads

// ------------------------------------------------------
// ✅ Use Cases
// ------------------------------------------------------
// 1. Load appropriate image assets:
//    You can load @2x or @3x image files based on pixel density
// const imageSource = PixelRatio.get() >= 3
//   ? require('./img@3x.png')
//   : require('./img@2x.png');

// 2. Convert layout size (DIP) to pixel size
//    For example, to request an image from server in actual pixel size
// const pixelSize = PixelRatio.getPixelSizeForLayoutSize(100);
// If PixelRatio.get() is 2 → pixelSize = 200 pixels

// 3. Font scaling (indirectly):
//    You might want to use pixelRatio to adjust font sizes or margins
//    For example:
// const scaledFontSize = 14 * PixelRatio.get(); // Adjust base font size

// ------------------------------------------------------
// 🛠️ Other useful PixelRatio methods:
// ------------------------------------------------------

// PixelRatio.getFontScale()
// → Returns the user's font scale setting (accessibility setting)

// PixelRatio.roundToNearestPixel(layoutSize)
// → Rounds a layout size to the nearest pixel size
// → Helps avoid blurry rendering of borders or lines

// Example:
// const rounded = PixelRatio.roundToNearestPixel(12.3); // might return 12 or 12.5 depending on device

// ------------------------------------------------------
// Summary:
// ------------------------------------------------------
// - PixelRatio.get() is essential for scaling content properly across devices
// - Use it to load images, scale layout dimensions, and create responsive designs
// - Works well with Flexbox, StyleSheet, and other layout tools in React Native
