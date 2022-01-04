import React, { useState,useEffect } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repositorie from '../../components/repositorie';
import api from '../../services/api';
import getRealm from '../../services/realm';
import {
  Container,
  Form,
  Input,
  MainList,
  Submit,
  Title,
} from './styled';




const Main: React.FC = () => {
  const colors = ['#006d6d','#1fcece'];

  const [input,setInput] = useState<string>('');
  const [repo,setRepository] = useState<any>([]);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const loadRepository = async ( ) =>{

      const realm = await getRealm();
      console.log(realm.path);

      const data = realm.objects('Repository').sorted('stars',true);

      setRepository(data);

    };

    loadRepository();


  },[])

  const handleAddRepository = async () =>{
    try {
      const response = await api.get(`/repos/${input}`)

      await saveRepository(response.data);

      Keyboard.dismiss();
      setInput('')
      setError(false)

    }catch (err) {
      setError(true)
    }
  }

  const saveRepository = async (repository: any) =>{
    const data = {
      id:repository.id,
      name:repository.name,
      fullname:repository.full_name,
      stars:repository.stargazers_count,
      description:repository.description,
      forks: repository.forks_count,
    }

    const realm = await getRealm();

    realm.write(()=>{
      realm.create('Repository',data);
    })


    return data;
  }


  const handleRefreshRepository = async (repository:any) => {
    const response = await api.get(`/repo/${repository.fullname}`)

    const data = await saveRepository(response.data);

    setRepository(repo.map((repo:any) =>repo.id === data.id?data:repo ))

  }


  return (
    <Container
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>

      <Title>Repositorios</Title>

      <Form>
        <Input
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder="Pesquise aqui..."
          placeholderTextColor={'#333'}
          value={input}
          onChangeText={(value)=>setInput(value)}
          error = {error}
        />
        <Submit onPress={()=>handleAddRepository()} >
          <Icon
            name={'add'}
            size={22}
            color={'#fff'}
          />
        </Submit>
      </Form>

      <MainList
        data={repo}
        keyboardShouldPersistTaps={'handled'}
        keyExtractor={(item:any) =>String(item.id)}
        renderItem={({item})=>
          <Repositorie data={item as any} onRefresh ={ ()=>{handleRefreshRepository(item)}} />}
        contentContainerStyle={{paddingHorizontal:20}}
        showsVerticalScrollIndicator={false}
      />


    </Container>
  );
};

export default Main;
