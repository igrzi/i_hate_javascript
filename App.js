import { AppRegistry } from 'react-native';
import MainContainer from './navigation/MainContainer';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainContainer);
function App() {
  return (
    <MainContainer />
  );
}

export default App;