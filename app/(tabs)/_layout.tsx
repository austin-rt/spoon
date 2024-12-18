import React from 'react';

import { Slot, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

import icons from '../../constants/icons';

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-8 w-8"
      />
      <Text
        className={`h-11 w-full text-sm ${focused ? 'font-psemibold' : 'font-pregular'}`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const tabBackgroundColor = colors.primary[700];
  const tabBarActiveTintColor = colors.accent[50];
  const tabBarInactiveTintColor = colors.primary[50];
  const tabBorderTopColor = tabBackgroundColor;

  if (process.env.EXPO_OS === 'web') return <Slot />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: tabBackgroundColor,
            borderTopWidth: 20,
            borderTopColor: tabBorderTopColor,
            height: 84,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dry',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.dry}
                color={color}
                name="Dry"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="liquid"
          options={{
            title: 'Liquid',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.wet}
                color={color}
                name="Liquid"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cook"
          options={{
            title: 'Cook Time',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.pot}
                color={color}
                name="Cook Time"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <StatusBar style="dark" />
    </>
  );
};
export default TabLayout;
