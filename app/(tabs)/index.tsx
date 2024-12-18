import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TabHeader from '@/components/TabHeader';

const DryIngredients = () => {
  return (
    <SafeAreaView className="h-full bg-neutral-50">
      <ScrollView contentContainerClassName="h-full">
        <View className="min-h-[85vh] w-full p-4">
          <TabHeader title="Dry Ingredients" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DryIngredients;
