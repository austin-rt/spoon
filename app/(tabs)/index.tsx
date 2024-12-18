import { useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TabHeader from '@/components/TabHeader';
import { CONVERSIONS, MEASUREMENTS } from '@/constants/measurements';

const DryIngredients = () => {
  // eslint-disable-next-line
  const [measurement, measurementSetter] = useState(MEASUREMENTS.dry[0]);
  // eslint-disable-next-line
  const [quantity, quantitySetter] = useState(1);
  // eslint-disable-next-line
  const [converted, convertedSetter] = useState([]);

  // eslint-disable-next-line
  const handleConversion = (measurement: string, qty: number) => {
    // @ts-ignore:next-line
    const conversion = CONVERSIONS.dry[measurement];
    const convert = Object.keys(conversion).map((key) => ({
      name: key,
      qty: conversion[key] * qty,
    }));
    // @ts-ignore:next-line
    convertedSetter(convert);
  };
  useEffect(() => {
    handleConversion(measurement.abbr, quantity);
  }, []);

  return (
    <SafeAreaView className="h-full bg-neutral-50">
      <View className="min-h-[85vh] w-full p-4">
        <TabHeader title="Dry Ingredients" />
        <Text className="text-2xl text-primary-900">
          {quantity} {measurement.name}
        </Text>
        <FlatList
          data={converted}
          renderItem={({ item }) => (
            <View>
              {/* @ts-ignore:next-line*/}
              <Text>{item.qty}</Text>
              {/* @ts-ignore:next-line*/}
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default DryIngredients;
