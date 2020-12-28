import Realm from 'realm';
import UserSchema from '../schemas/UserSchema';
import ChannelSchema from '../schemas/ChannelSchema';

export default function getRealm() {
  return Realm.open({
    schema: [UserSchema, ChannelSchema],
  });
}
