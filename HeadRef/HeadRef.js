import { StyleSheet, View, Text } from 'react-native';

export default function HeadRef() {
  return (
    <>
      <View style={styles.container}>

        <Text style={styles.headRefText}>Head Referee</Text>

        <View style={styles.lights}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>

        <View style={styles.infractions}>
          <View style={styles.infractionRed}></View>
          <View style={styles.infractionBlue}></View>
          <View style={styles.infractionYellow}></View>
        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: '#fff',
    backgroundColor: '#000',
    justifyContent: 'space-evenly'
  },
  headRefText: {
    flex: 1,
    color: '#fff',
    fontSize: 'larger',
  },
  lights: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white'
  },
  circle: {
    height: 100,
    width: 100,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: '50%',
    borderWidth: 1
  },
  infractions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  infractionRed: {
    backgroundColor: 'red',
    height: 75,
    width: 100,
  },
  infractionBlue: {
    backgroundColor: 'blue',
    height: 75,
    width: 100,
  },
  infractionYellow: {
    backgroundColor: 'yellow',
    height: 75,
    width: 100,
  }
});
