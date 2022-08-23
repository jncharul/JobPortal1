import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreateProfile from '../screens/CreateProfile';
import ReadProfiles from '../screens/ReadProfiles';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
    render() {
        return (

            <Tab.Navigator>
                <Tab.Screen name="Create Profile" component={CreateProfile} />
                <Tab.Screen name="Read Profile" component={ReadProfiles} />
            </Tab.Navigator>

        )
    }
}