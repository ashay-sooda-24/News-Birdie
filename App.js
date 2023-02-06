import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import LatestNews from "./src/screens/LatestNews";
import PrevNews from "./src/screens/PrevNews";
import Finance from "./src/screens/Finance";

const Tab = createBottomTabNavigator();

//https://newsapi.org/docs/get-started

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Top News") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Sports") {
              iconName = focused ? "football" : "football-outline";
            } else if (route.name === "Finance") {
              iconName = focused ? "cash" : "cash-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Top News"
          component={LatestNews}
          options={{
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
          }}
        />
        <Tab.Screen
          name="Sports"
          component={PrevNews}
          options={{
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
          }}
        />
        <Tab.Screen
          name="Finance"
          component={Finance}
          options={{
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "white",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
