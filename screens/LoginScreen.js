import * as React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Hi...!!
                </Text>
                <TouchableOpacity style={{ backgroundColor: "red" }}
                    onPress={() => this.props.navigation.navigate("Drawer")}>
                    <Text>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}