import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
      <Link href="/(tabs)">go to tabs</Link>
      <Link href="/">go to home</Link>
    </View>

  )
}

export default SignIn;