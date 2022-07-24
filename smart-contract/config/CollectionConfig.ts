import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'VeryImportantTurtles',
  tokenName: 'Very Important Turtles',
  tokenSymbol: 'VIT',
  hiddenMetadataUri: 'ipfs://QmZy4oYqTW8QPLL7zqwtwRAuS2gff5SBxUFQQ69tw34uDd/hidden.json',
  maxSupply: 3500,
  whitelistSale: {
    price: 30,
    maxMintAmountPerTx: 6,
  },
  preSale: {
    price: 55,
    maxMintAmountPerTx: 15,
  },
  publicSale: {
    price: 77,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x4c468EEFd1d85447d5623001De25bB9B6b5e03e4",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
