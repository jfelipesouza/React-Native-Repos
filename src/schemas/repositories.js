export default class RepositorySchemas{
  static schema = {
    name: 'Repository',
    primaryKey:'id',
    properties:{
      id:{type:'int',indexed:true},
      name: 'string',
      fullname:'string',
      description:'string',
      stars:'int',
      forks:'int',

    }
  }
}
