export default class UserSchema {
  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: 'int',
      username: 'string',
      password: 'string',
    },
  };
}
