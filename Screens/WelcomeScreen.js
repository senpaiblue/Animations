import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import gojo from "../assets/gojo.jpg";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function WelcomeScreen() {

  const ring1padding = useSharedValue(0)
  const ring2padding = useSharedValue(0)

  useEffect(()=>{
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5), {
        mass: 10, // Set the desired mass value
      });
    }, 200);

    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(5.5), {
        mass: 20, // Set the desired mass value
      });
    }, 500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-[#FCC625]">
      <StatusBar style="light" />
      {/* main section */}
      <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring2padding }}>
        <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring1padding }}>
          <Image
            source={gojo}
            className="rounded-full"
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2 mt-10">
        <Text className="text-white font-medium tracking-widest" style={{ fontSize: hp(7) }}>ごじょ</Text>
        <Text className="text-white font-normal tracking-widest" style={{ fontSize: hp(4) }}>私は最強です</Text>
      </View>
    </View>
  );
}
