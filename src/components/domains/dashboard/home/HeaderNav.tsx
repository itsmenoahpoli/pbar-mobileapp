import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@/hooks";

export const HeaderNav: React.FC = () => {
  const { navigate } = useNavigation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    // @ts-ignore
    navigate("WELCOME_SCREEN");
    logout();
  };

  return (
    <View style={styles.headerContainer}>
      <View className="bg-red-700 flex flex-col justify-between gap-y-4 py-4 px-3">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-lg text-white font-semibold capitalize">
              Hello, {user.firstName} {user.lastName}
            </Text>
            <Text className="text-xs text-gray-100">Book your travel now!</Text>
          </View>

          <Pressable onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    shadowColor: "#ddd",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    zIndex: 999,
  },
});
