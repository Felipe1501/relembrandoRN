import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>BARBIE</Text>
      <Image
        style={styles.img}
        source={{uri:`https://uploads.metropoles.com/wp-content/uploads/2022/07/05172341/MargotRobbie-Barbie-Filme-Capa.jpg`}}
      />
      <View style={styles.horizontal}>
        <ActivityIndicator/>
        <ActivityIndicator size={"large"} />
        <ActivityIndicator size={"small"} color="#00ff00" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A02FFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 350,
    height: 300,
    borderRadius: 8
  },
  texto: {
    color: '#fff',
    fontSize: 30
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
