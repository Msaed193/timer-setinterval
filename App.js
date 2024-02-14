
import { useEffect, useState } from 'react';
import { ActivityIndicator,Text, StyleSheet, View, Button } from 'react-native';

export default function App() {

  const [isPending, setisPending] = useState (true);

  const [count, setCount] = useState (0);
  const [timerId, setTimerId] = useState ();

  useEffect(() => {
    setTimeout(() => {
      setisPending(false)
    }, 2000);
  }, []); 
  useEffect(() => {
    const timerId = setInterval (() => {
      setCount(prev => prev+1)
    }, 300)
    setTimerId(timerId);

  }, []);
  


  return (
    <View style={styles.container}>
      <ActivityIndicator size='large'  animating={isPending}>

      </ActivityIndicator>
      {!isPending && <Text>{count}</Text>}
      <Button title='stpo' onPress={()=> clearInterval(timerId)}></Button>
      

    </View>
      

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
