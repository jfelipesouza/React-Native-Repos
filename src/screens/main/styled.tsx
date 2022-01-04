import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'react-native';

const statusbarHeight = StatusBar.currentHeight as number;

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: ${statusbarHeight + 12}px;
  color: #eee;
  font-size: 32px;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

type InputProps = {
  error: boolean;
};

export const Input = styled.TextInput<InputProps>`
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border-radius: 5px;
  border-width: 1.8px;
  border-style: solid;
  border-color: #333;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #473f49;
  margin-left: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0 16px;
`;

export const MainList = styled.FlatList`
  margin-top: 20px;
`;
