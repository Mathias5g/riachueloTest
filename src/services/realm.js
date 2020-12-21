import Realm from 'realm';
import ChannelSchema from '../schemas/ChannelSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ChannelSchema],
  });
}
