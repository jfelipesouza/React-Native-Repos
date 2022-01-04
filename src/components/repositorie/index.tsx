import React from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Container, Descrition, Name, RefreshButton, RefreshText, Stat, StatCount, Stats } from './styled';


type RepositorieProps = {
  data:{
    name:string,
    description:string,
    stars:number,
    forks:number
  },
  onRefresh:any,

}

const Repositorie: React.FC<RepositorieProps> = ({data,onRefresh}) => {

  return (
    <Container style={{elevation:5,shadowColor:'#000',shadowOpacity:1,}} >
      <Name>{data.name}</Name>
      <Descrition numberOfLines={2} >{data.description}</Descrition>
      <Stats>
        <Stat>
          <Icon
            name={'star'}
            size={20}
            color ={"#0180b3"}
          />
          <StatCount>{data.stars}</StatCount>
        </Stat>

        <Stat>
          <Icon
            name={'code-fork'}
            size={20}
            color ={"#333"}
          />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

      <RefreshButton activeOpacity={0.5} onPress={()=>onRefresh} >
        <Icon name='refresh' color={'#147852'} size={25} />
        <RefreshText>Atualizar</RefreshText>
      </RefreshButton>
    </Container>
  );
}

export default Repositorie;
