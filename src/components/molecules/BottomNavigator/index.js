import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../utils';
import { TabItem } from '../../atoms';
//ketiga props ini di ambil dari documentasi  react navigation lihat catatan 
const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          //menggunakan isFocused memberi nilai false/true
          //dibutuhkan key=index karena akan ada maping pengulanagan 
          <TabItem title={label}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused} />
        );
      })}
    </View>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 12,
    backgroundColor: colors.secondary
  }
})
