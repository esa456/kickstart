import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8651C7e7a1DD507fc00aC637336c6979CE9cFD8A'
);

export default instance;
