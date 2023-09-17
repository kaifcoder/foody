import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const WelcomeScreen = () => {
    return (
        <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
            <StatusBar style="light" />
            <View className="bg-white/20 rounded-full p-10">
                <View className="bg-white/20 rounded-full p-8">
                    <Image
                        source={require('../../assets/images/welcome.png')}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            </View>
            <View className="flex items-center space-y-2">
                <Text className="text-white font-bold tracking-widest text-6xl">
                    Foody
                </Text>
                <Text className="text-white font-medium tracking-widest text-lg">Food is always right</Text>
            </View>
        </View>
    )
}

export default WelcomeScreen