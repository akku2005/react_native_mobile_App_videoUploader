import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({ video }) => {
  const [play, setPlay] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Destructure properties and add checks to ensure they exist
  const {
    title = "Untitled",
    thumbnail,
    video: videoUrl,
    creator = {},
  } = video || {};

  const { username = "Unknown", avatar } = creator;

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row items-start gap-3">
        <View className="flex-1 flex flex-row items-center">
          <View className="w-12 h-12 rounded-lg border-2 border-rose-500 flex justify-center items-center p-1">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="flex-1 ml-3">
            <Text
              className="font-semibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-medium"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              source={icons.menu}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri: videoUrl }}
          className="w-full h-60 rounded-xl mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-4/5 bg-gray-800 p-5 rounded-2xl">
            <TouchableOpacity
              className="flex flex-row items-center p-2 bg-rose-700 rounded mb-2"
              onPress={() => {
                setModalVisible(false);
                // Add to favorites logic here
              }}
            >
              <Image
                source={icons.heart}
                className="w-5 h-5 mr-2"
                resizeMode="contain"
              />
              <Text className="text-white text-lg">Add to Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-row items-center p-2 bg-gray-700 mb-2"
              onPress={() => {
                setModalVisible(false);
                // Unfavorite logic here
              }}
            >
              <Image
                source={icons.heart}
                className="w-5 h-5 mr-2"
                resizeMode="contain"
              />
              <Text className="text-white text-lg">Unfavorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex flex-row items-center p-2 bg-red-300 rounded"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-black text-lg">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VideoCard;
