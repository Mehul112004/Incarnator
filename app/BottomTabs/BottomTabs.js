import { Feather, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../components/Screens/HomeScreen";
import ProfileScreen from "../../components/Screens/ProfileScreen";

const Tabs = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        component={HomeScreen}
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        component={ProfileScreen}
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MyTabs;
