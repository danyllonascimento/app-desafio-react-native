import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();
import ButtonReturn from './assets/svg/returnButton.svg';
import Splash1 from "./screens/Splash1";
import Splash2 from "./screens/Splash2";
import Splash3 from "./screens/Splash3";
import Splash4 from "./screens/Splash4";
import Splash5 from "./screens/Splash5";
import Perfil from "./screens/Perfil";
import Login from './screens/Login';
import RecuperarSenha from './screens/RecuperarSenha';
import Termos from './screens/Termos';
import Logo from './assets/svg/(sem fundo) GLAM - LOGO.svg';
import Container from './components/Container';
import Tabs from './Tabs';
import { Text, View } from 'react-native';
import Cadastrar from './screens/Cadastrar';
import Inicio from './screens/Inicio';
import Servicos from './screens/Servicos';

export function Routes(props) {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroudColor: 'white'
        }
      }}
    >
      <Screen name='Splash1' component={Splash1} />
      <Screen name='TabB' component={TabB} options={{
        header: ({ goBack }) => ({
          left: <Left onPress={goBack} />,
        }),
        headerBackground: () => (
          <Container marginTop={35}>
            <Logo width={83} height={48} />
          </Container>

        ),


      }} />
      <Screen name='Splash2' component={Splash2} />
      <Screen name='Splash3' component={Splash3} />
      <Screen name='Splash4' component={Splash4} />
      <Screen name='Splash5' component={Splash5} />
      <Screen name='Perfil' component={Perfil} />
      <Screen name='Login' component={Login} />
      <Screen name='Inicio' component={Inicio} />
      <Screen name='RecuperarSenha' component={RecuperarSenha} />
      <Screen name='Tabs' component={Tabs} options={{
        header: ({ goBack }) => ({
          left: <Left onPress={goBack} />,
        }),
        headerBackground: () => (
          <Container marginTop={35}>
            <Logo width={83} height={48} />
          </Container>

        ),


      }} />


      <Screen name='Termos' component={Termos}
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: ({ goBack }) => (
            <Text onPress={() => navigation.goBack()} >
              <ButtonReturn />
            </Text>

          ),

          headerBackground: () => (
            <Container marginTop={40} >
              <Logo width={55} height={32} />
            </Container>

          ),

        })} />
      <Screen name='Servicos' component={Servicos}
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerLeft: ({ goBack }) => (
            <Text onPress={() => navigation.goBack()} >
              <ButtonReturn />
            </Text>

          ),

          headerBackground: () => (
            <Container marginTop={40} >
              <Logo width={55} height={32} />
            </Container>

          ),

        })} />

    </Navigator>

  );
}