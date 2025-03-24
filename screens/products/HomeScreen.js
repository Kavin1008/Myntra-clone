import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import img from '../../assets/leetcodebadge.png'
import Carousel from "../../components/Carousel";
import { Chip, Icon } from "react-native-paper";

const banners = [
  { id: 1, image: img },
  { id: 2, image: img },
  { id: 3, image: img },
];

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Myntra</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <Ionicons name="cart-outline" size={24} color="black" style={{ marginLeft: 15 }} />
        </View>
      </View>

      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate("SearchScreen")}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <Text style={styles.searchPlaceholder}>Search for brands and products</Text>
        <Ionicons name="camera-outline" size={20} color="gray" style={styles.icon}/>
        <Ionicons name="mic-outline" size={20} color="gray" style={styles.icon}/>
       </TouchableOpacity>

      <View style={styles.chipContaier}>
      <Chip mode="outlined" style={styles.chip} icon={img} onPress={() => console.log('Pressed')}>Fashion</Chip>
      <Chip mode="outlined" style={styles.chip} icon={img} onPress={() => console.log('Pressed')}>Beauty</Chip>
      <Chip mode="outlined" style={styles.chip} icon={img} onPress={() => console.log('Pressed')}>Home</Chip>
      <Ionicons name="grid" style={styles.icon}/>
      </View>


      <Carousel banners={banners} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  chipContaier :{alignItems: "center", marginTop:10, flexDirection:"row", gap: 5, marginHorizontal:10},
  chip:{borderRadius:20, width: 112},
  header: { flexDirection: "row", justifyContent: "space-between", paddingTop: 30, paddingLeft: 20, paddingRight: 20, paddingBottom: 20, alignItems: "center" },
  logo: { fontSize: 20, fontWeight: "thin", color: "black" },
  headerIcons: { flexDirection: "row" },
  searchBar: { flexDirection: "row", backgroundColor: "#f1f1f1", padding: 10, marginHorizontal: 10, borderRadius: 20, alignItems: "center" },
  icon: { marginHorizontal: 10 },
  searchPlaceholder: { flex: 1, color: "gray", fontSize: 11 }
});

export default HomeScreen;
