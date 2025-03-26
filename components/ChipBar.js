import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Chip } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const ChipBar = ({ chips }) => {
    
    return (
        <View style={styles.chipContaier}>

            {chips.map((chip, index) => (
                <Chip mode="outlined" key={index} style={styles.chip} icon={chip.image} onPress={() => console.log('Pressed')}>{chip.label}</Chip>
            ))}
            <Ionicons name="grid" style={styles.icon} size={20} />
        </View>
    )
}

export default ChipBar

const styles = StyleSheet.create({
    chipContaier: { alignItems: "center", marginTop: 20, flexDirection: "row", gap: 5, marginHorizontal: 10 },
    chip: { borderRadius: 20, width: 112, alignItems:"center", justifyContent: "center" }, 
    icon: { marginHorizontal: 15 },
})