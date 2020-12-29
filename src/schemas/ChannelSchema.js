export default class ChannelSchema {
  static schema = {
    name: 'Channel',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      channelId: 'string',
      channelTitle: 'string',
      thumbnails: 'string',
      favourite: 'bool',
    },
  };
}
