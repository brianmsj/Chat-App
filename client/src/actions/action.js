
export const SWITCH_CHANNEL = 'SWITCH_CHANNEL';
export function switchChannel(channel) {
  return {
    type: SWITCH_CHANNEL,
    channel
  };
}
