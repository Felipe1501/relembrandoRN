import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, Alert, SafeAreaView } from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.btn}>
        <Button
          title="CLIQUE AQUI"
          onPress={() => Alert.alert('FUNCIONANDO FI')} 
        />
        <Separator />
        <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Separator />
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    <Separator />
    <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
      </View>
      
    </SafeAreaView>
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
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
