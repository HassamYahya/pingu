import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home'
import Settings from '../components/Settings'
import Search from '../components/Search'
import LiveStream from '../components/LiveStream'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';


const Drawer = createDrawerNavigator();
const BottomNav = createBottomTabNavigator();
BottomScreen = ({ route, navigation }) => {
    console.log("checking routes 2 ", route, navigation)
    return (
        <BottomNav.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63',
                inactiveTintColor: 'white',
                style: {
                    backgroundColor: '#1B2631',
                    borderTopColor: '##1B2631'
                }
            }}
        >
            <BottomNav.Screen initialParams={route} name="Search" component={Search} options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                    <Icon2 name="search" color={color} size={size} />
                ),
            }} />
            <BottomNav.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }} />
            <BottomNav.Screen name="LiveStream" component={LiveStream} options={{
                tabBarLabel: 'LiveStream',
                tabBarIcon: ({ color, size }) => (
                    <Icon2 name="livestream" color={color} size={size} />
                ),
            }} />

        </BottomNav.Navigator>
    )
}
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#E51C24',
                    inactiveTintColor: 'white',
                    style: { marginVertical: 20 }
                }}
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor: '#34495E',
                    activeTintColor: 'white',
                }}

            >
                <Drawer.Screen name="Home" component={BottomScreen} />
                <Drawer.Screen name="Login" component={Settings} />
                {/* <Drawer.Screen name="Search" component={Search} />
                <Drawer.Screen name="LiveStream" component={LiveStream} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}