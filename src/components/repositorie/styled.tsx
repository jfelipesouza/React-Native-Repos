import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#fafafa;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:#333;
  text-transform: capitalize;
`;

export const Descrition = styled.Text`
  color:#666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;

`;

export const Stat = styled.View`
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`;

export const StatCount = styled.Text`
  margin-left: 5px;
  color:#222;
  font-size: 16px;
`;

export const RefreshButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin-top: 10px;
  width: 100%;

`
export const RefreshText = styled.Text`
  font-size: 16px;
  color:#222;
  margin-left: 5px;


`
