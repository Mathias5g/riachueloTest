export default class ChannelSchema {
  static schema = {
    name: 'Channel',
    primaryKey: 'channelId',
    properties: {
      channelId: 'string',
      channelTitle: 'string',
      thumbnails: 'string',
      favourite: 'bool',
    },
  };
}
