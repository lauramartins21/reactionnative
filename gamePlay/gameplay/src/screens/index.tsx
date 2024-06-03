import { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import { styles } from './styles';
export function SingnIn () {
    const [text, setText] = useState ("");
    
    return(
      <View style= {styles.container}>
        <Text>
          HELLO PEOPLE
        </Text>
     <TextInput style={styles.input} 
     onChangeText={setText}
     />
        <Text>
          voce digitou: {text}
        </Text>
      </View>

    );


}
