import * as React from "react";
import { Text, View } from 'react-native';

export default class LogoutScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Logout...!!
                </Text>
            </View>
        )
    }
}