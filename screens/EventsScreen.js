import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function EventsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events first screen!</Text>
      <Button
        title="Go to second screen"
        onPress={() => navigation.navigate("EventsSecondScreen")}
        //must be same as stack.screen
      ></Button>
    </View>
  );
}
function EventsSecondScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hot pink",
      }}
    >
      <Text>Events Second Screen!</Text>
    </View>
  );
}
const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
