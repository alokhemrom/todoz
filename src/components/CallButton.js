import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Linking from "expo-linking";

const phoneNumber = "9523341927";
const CallButton = () => {
  const handleCall = async () => {
    const supported = await Linking.canOpenURL(`tel:${phoneNumber}`);
    if (supported) {
      await Linking.openURL(`tel:${phoneNumber}`);
    } else {
      console.log(`Call functionality is not available`);
    }
  };

  return (
    <TouchableOpacity onPress={handleCall}>
      <Text>Call</Text>
    </TouchableOpacity>
  );
};

export default CallButton;
