import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";
import { icons } from "../../constants";

const Save = () => {
  const [savedVideos, setSavedVideos] = useState([
    {
      id: 1,
      title: "Sample Video 1",
      videoUri: "https://www.example.com/sample1.mp4",
      thumbnailUri: "https://www.example.com/thumbnail1.jpg",
    },
    {
      id: 2,
      title: "Sample Video 2",
      videoUri: "https://www.example.com/sample2.mp4",
      thumbnailUri: "https://www.example.com/thumbnail2.jpg",
    },
  ]);

  const removeVideo = (id) => {
    setSavedVideos(savedVideos.filter((video) => video.id !== id));
    Alert.alert(
      "Video Removed",
      "The video has been removed from your saved list."
    );
  };

  return (
    <SafeAreaView className=" flex-1 bg-primary">
      <ScrollView className="p-4">
        <Text className="text-3xl text-white font-bold mb-6">Saved Videos</Text>
        {savedVideos.length === 0 ? (
          <Text className="text-white text-lg">No saved videos yet.</Text>
        ) : (
          savedVideos.map((video) => (
            <View
              key={video.id}
              className="mb-8 p-4 bg-gray-800 rounded-lg shadow-md"
            >
              <Text className="text-xl text-white font-semibold mb-3">
                {video.title}
              </Text>
              <Video
                source={{ uri: video.videoUri }}
                className="w-full h-48 rounded-lg"
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
              <TouchableOpacity
                onPress={() => removeVideo(video.id)}
                className="flex-row items-center mt-3"
              >
                <Image
                  source={icons.trash}
                  resizeMode="contain"
                  className="w-6 h-6 mr-2"
                />
                <Text className="text-sm text-red-400 font-medium">Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Save;
