import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../services/firebaseAuth';

export default function RegisterScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleRegister(){
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user.email);
        })
    }
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputField} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email}/>
            <TextInput style={styles.inputField} placeholder='Password' secureTextEntry onChangeText={(text) => setPassword(text)} value={password}/>
        </View>
        <TouchableOpacity 
            style={styles.spotifyButton} 
            onPress={() => handleRegister()}
            activeOpacity={0.8}
            >
            <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Already have an account? Login here</Text>
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    letterSpacing: -0.5,
  },
  inputContainer: {
    width: '100%',
    alignItems: "center",
  },
  inputField: {
    backgroundColor: '#282828',
    borderRadius: 4,
    color: '#FFFFFF',
    width: '90%',
    marginVertical: 8,
    paddingHorizontal: 15,
    height: 55,
    fontSize: 16,
  },
  footerText: {
    color: '#B3B3B3',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  spotifyButton: {
    backgroundColor: '#1DB954',
    width: '90%',               
    height: 55,                 
    borderRadius: 30,           
    justifyContent: 'center',   
    alignItems: 'center',       
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',           
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,         
  }
});