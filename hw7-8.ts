// 7) Create a type that represents an NFT, with properties like
// imageURL, name, currentOwnerAddress, openSeaFloorPrice, and description.

type NFT = {
  imageURL: string;
  name: string;
  currentOwnerAddress: string;
  openSeaFloorPrice: number;
  description: string;
};

// 8) Create a function that accepts an array of NFTs and returns the one with the lowest floor price.
// Not the floor price itself, but it returns an NFT. `getCheapestNft`

function Nft(
  imageURL,
  name,
  currentOwnerAddress,
  openSeaFloorPrice,
  description
) {
  this.imageURL = imageURL;
  this.name = name;
  this.currentOwnerAddress = currentOwnerAddress;
  this.openSeaFloorPrice = openSeaFloorPrice;
  this.description = description;
}

const anNft = new Nft(
  "www.whodis.com/png",
  "jags in the superbowl",
  "0xRUG",
  0.2,
  "we GMI to the SB, WOOOO!"
);
const anotherNft = new Nft(
  "www.weareallGMInoDOUBT.com/email.png",
  "WAGBO",
  "0xEMAIL.COM",
  1,
  "look at this animal picture"
);
const thirdNft = new Nft(
  "www.rugcity.com/kek.png",
  "KEKW 4K",
  "0xBCE",
  0.5,
  "we minting memes now"
);

const arrayOfNfts = [anNft, anotherNft, thirdNft];

function getCheapestNft(array: NFT[]) {
  return array.reduce((prev, current) => {
    return prev.openSeaFloorPrice < current.openSeaFloorPrice ? prev : current;
  });
}

console.log(getCheapestNft(arrayOfNfts));

// checking the opposite function
function getExpenisveNft(array: NFT[]) {
  return array.reduce((prev, current) => {
    return prev.openSeaFloorPrice > current.openSeaFloorPrice ? prev : current;
  });
}

console.log(getExpenisveNft(arrayOfNfts));
