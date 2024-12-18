import { View, Text } from 'react-native';

interface TabHeaderProps {
  title: string;
  subtitle?: string;
}

const TabHeader = ({ title, subtitle }: TabHeaderProps) => {
  return (
    <View className="mb-6 flex flex-row items-start justify-between">
      <View>
        <Text className="font-psemibold text-3xl text-primary">{title}</Text>
        {subtitle && (
          <Text className="font-pmedium text-sm text-primary-200">
            {subtitle}
          </Text>
        )}
      </View>

      <View className="mt-1.5"></View>
    </View>
  );
};
export default TabHeader;
