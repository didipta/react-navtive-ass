import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topsection]}>
        <Image
          source={{
            uri: "https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e",
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#DDE6ED",
          }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>John Doe</Text>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginTop: "5px",
              color: "blue",
            }}
          >
            Developer
          </Text>
          <Text style={{ fontSize: 15, color: "gray", marginTop: "5px" }}>
            Joined 25 Dec 2020
          </Text>
        </View>
      </View>
      <Text
        style={{
          padding: 15,
          fontSize: "15px",
          color: "gray",
          lineHeight: "30px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
        convallis tortor. Sed sit amet nunc nec purus tincidunt tincidunt. Donec
        vel libero at nisl tempor tinc
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#EEEEEE",
          padding: 20,
          margin: 15,
          borderRadius: 15,
        }}
      >
        <View
          style={{ flexDirection: "column", alignItems: "center", gap: 10 }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>Posts</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>34</Text>
        </View>
        <View
          style={{ flexDirection: "column", alignItems: "center", gap: 10 }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>Followers</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>34</Text>
        </View>
        <View
          style={{ flexDirection: "column", alignItems: "center", gap: 10 }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>Following</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>34</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "col",
          justifyContent: "space-around",
          padding: 20,
          gap: 20,
          marginTop: 15,
          color: "gray",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/256/684/684809.png",
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Dhaka, Bangladesh
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Chain_link_icon_slanted.png",
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: "500", color: "gary" }}>
            www.johndoe.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/512/126/126720.png",
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: "500", color: "gary" }}>
            Not Available
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png",
            }}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={{ fontSize: 15, fontWeight: "500", color: "gary" }}>
            github.com/johndoe
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "70%",
    borderRadius: 20,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    margin: 20,
  },
  topsection: {
    height: "150px",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
});
