import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{
        backgroundColor: "#FFC700",
        borderRadius: 12,
        minHeight: 62,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        opacity: isLoading ? 0.5 : 1,
        ...containerStyles,
      }}
      disabled={isLoading}
    >
      <Text
        style={{
          color: "#161622",
          fontWeight: "600",
          fontSize: 18,
          ...textStyles,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
