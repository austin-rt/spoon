/* eslint-disable */
import { useEffect, useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

import TabHeader from '@/components/TabHeader';
import {
  CONVERSION_MAP,
  MEASUREMENTS,
  QUANTITIES,
} from '@/constants/measurements';

const DryIngredients = () => {
  const [measurement, measurementSetter] = useState<DryMeasurement>('oz');
  const [quantity, quantitySetter] = useState(1);
  const [converted, convertedSetter] = useState<
    { measurement: DryMeasurement; qty: number }[] | []
  >([]);

  const handleConversion = (measurement: DryMeasurement, quantity: number) => {
    const map = CONVERSION_MAP.dry[measurement];
    const mapped = (Object.keys(map) as (keyof typeof map)[]).map((key) => {
      return {
        measurement: key,
        qty: parseFloat((map[key] * quantity).toFixed(2)),
      };
    });
    convertedSetter(mapped);
  };

  const onMeasurementChange = (itemValue: DryMeasurement) => {
    measurementSetter(itemValue);
  };

  const onQuantityChange = (itemValue: number) => {
    quantitySetter(itemValue);
  };

  useEffect(() => {
    handleConversion(measurement, quantity);
  }, [measurement, quantity]);

  return (
    <SafeAreaView className="h-full bg-neutral-50">
      <View className="min-h-[85vh] w-full p-4">
        <TabHeader title="Dry Ingredients" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <Picker
            style={{ width: '50%' }}
            selectedValue={quantity}
            onValueChange={onQuantityChange}>
            {QUANTITIES.map((item) => (
              <Picker.Item key={item} label={item.toString()} value={item} />
            ))}
          </Picker>
          <Picker
            style={{ width: '50%' }}
            selectedValue={measurement}
            onValueChange={onMeasurementChange}>
            {MEASUREMENTS.dry.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>
        <Text className="text-2xl text-primary-900">
          {quantity} {measurement}
        </Text>
        <FlatList
          data={converted}
          renderItem={({ item }) => (
            <View>
              <Text className="text-2xl text-primary-900">
                {item.qty} {item.measurement}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default DryIngredients;
