import Realm from 'realm';

import RepositorySchemas from '../../schemas/repositories';


const getRealm = () =>{
 return Realm.open({
   schema:[RepositorySchemas],

 })
};

export default getRealm;
