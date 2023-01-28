// every CHARACTER should have a getDmaage function that
// returns a number.
interface Character {
  getDamage(): number;
  getName(): string;
}

class PlayerCharacter implements Character {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getDamage(): number {
    return 1;
  }

  getName(): string {
    return this.name;
  }
}

class Warlock extends PlayerCharacter {}

class Druid extends PlayerCharacter {}

class Mob implements Character {
  getDamage(): number {
    return 3;
  }

  getName(): string {
    return "mobbie";
  }
}

function fight(playerCharacter: Character, mob: Character) {
  console.log("I deal", playerCharacter.getDamage());
  console.log("mob deals", mob.getDamage());
  console.log("my name is", playerCharacter.getName());
}

const myCharacter = new Warlock("gogocons");
const mob = new Mob();
fight(myCharacter, mob);

// lets do an array function with types.

function printsArrayOfStrings(array: string[]) {
  array.forEach((element) => console.log(element));
}

const myArray: string[] = ["hello", "gogo"];

printsArrayOfStrings(myArray);

function returnsPromise(): Promise<string> {
  return new Promise((resolve) => resolve("Hello"));
}

returnsPromise().then((str) => console.log(str));

type User = {
  name: string;
  isAdmin: boolean;
};
type Message = {
  user: User;
  keks: number;
  text: string;
};

const discordMessage: Message = {
  user: {
    name: "gogocons",
    isAdmin: false,
  },
  keks: 4,
  text: "i am doing code class only now",
};

function printsMessageKeks(message: Message) {
  console.log("Message has this many keks", message.keks);
}

printsMessageKeks(discordMessage);

function newMessage(user: string, text: string): Message {
  const message: Message = {
    user: {
      name: user,
      isAdmin: false,
    },
    text: text,
    keks: 0,
  };

  return message;
}

console.log(newMessage("dip", "GM"));

type NFT = {
  imageUrl: string;
  title: string;
  description: string;
  mediaGateway: string;
  nftNumber: number;
};

type NFTResponse = {
  response: NFT[];
};

// pretend we did an axios call
function getNfts(): Promise<NFTResponse> {
  const nfts: NFT[] = [
    {
      imageUrl: "https://ngmipandas.com",
      title: "NGMI",
      description: "these pandas are ngmi",
      mediaGateway: "mediagateway",
      nftNumber: 420,
    },
  ];

  return Promise.resolve({
    response: nfts,
  });
}

getNfts().then((nftResponse) =>
  nftResponse.response.map((nft) => console.log(nft.imageUrl))
);
