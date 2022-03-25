import React from "react"
import {View, Text} from "react-native"
import Styles from "./style.js"

export default function Title(){
    return (
        <View style={Styles.boxTitle}>
            <Text style={Styles.TextTitle}>One Bit Health</Text>
        </View>
    );
}