import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
// import Categories from '../components/categories';
// import Recipes from '../components/recipes';
export default function HomeScreen() {


  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      <ScrollView>
        <View className="flex items-center justify-center text-3xl">
          <Text className="text-lg">hi Hello</Text>
        </View>
      </ScrollView>
    </View>
  )
}