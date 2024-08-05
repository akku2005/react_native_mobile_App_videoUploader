import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useRef } from "react";
import { Animated } from "react-native";
import { icons } from "../constants";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(borderColor, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(borderColor, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const borderInterpolation = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(255, 255, 255, 0.3)", "rgba(0, 150, 255, 1)"], // Glowing blue effect
  });

  const shadowInterpolation = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 150, 255, 0.5)"], // Subtle shadow effect
  });

  return (
    <View className="relative flex flex-row items-center bg-black/40 rounded-lg border border-gray-700 px-4 py-2 backdrop-blur-md">
      <TextInput
        className="flex-1 text-white text-base placeholder-gray-400"
        value={query}
        placeholder="Search for videos"
        placeholderTextColor="#9E9E9E"
        onChangeText={(text) => setQuery(text)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <TouchableOpacity
        className="ml-4 p-2 rounded-full bg-gray-700"
        onPress={() => {
          if (query.trim() === "") {
            return Alert.alert(
              "Missing Query",
              "Please input something to search."
            );
          }

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Image
          source={icons.search}
          className="w-6 h-6 text-gray-300"
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Animated.View
        className="absolute inset-0 rounded-lg border"
        style={{
          borderColor: borderInterpolation,
          borderWidth: 2,
          shadowColor: borderInterpolation, // Apply shadow color
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </View>
  );
};

export default SearchInput;
