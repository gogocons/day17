// 5) Objects can be types, declared like this:

// type MyObject = {
//     user: string;
// }

// const me: MyObject = {
//     user: "Horsey"
// }

// function printUser(obj: MyObject) {
//     console.log(obj.user);
// }

// Knowing this, create a type that represents a discord user that has the following properties:
// name, which is a string
// isAdmin, which is a boolean
// isGMI, which is a boolean
// and roles, which is an array of strings.

// Then, create a type that represents a discord message that has the following properties:
// user, which is type DiscordUser
// text, which is a string
// keks, which is a number.

type DiscordUser = {
  name: string;
  isAdmin: boolean;
  isGMI: boolean;
  roles: string[];
};

type DiscordMessage = {
  user: DiscordUser;
  text: string;
  keks: number;
};

// 6) Create functions that use your types:
// - addKekToMessage which takes a discord message
// - canDeleteServer which takes a discord user and checks if they are admin or not before returning a boolean
// - editMessage which takes a discord message, a discorduser, and newText,
// and IF the user name is the same as the user on the discordmessage itself, allows them to edit the message.

function addKekToMessage(message: DiscordMessage) {
  message.keks++;
}

const myUser = {
  name: "gogocons",
  isAdmin: false,
  isGMI: false,
  roles: ["CM", "NGMI", "diply fan club"],
};

const newMessage = {
  user: myUser,
  text: "GM GM etc etc",
  keks: 0,
};

console.log(newMessage);

addKekToMessage(newMessage);

console.log(newMessage);

function canDeleteServer(user: DiscordUser) {
  return user.isAdmin;
}

const bussinUser = {
  name: "newealbro",
  isAdmin: true,
  isGMI: true,
  roles: ["Team", "GMI", "not a fan of diply club"],
};

console.log(canDeleteServer(myUser));
console.log(canDeleteServer(bussinUser));

function editMessage(
  message: DiscordMessage,
  user: DiscordUser,
  newText: string
) {
  if (message.user === user) {
    message.text = newText;
  } else {
    console.log("you cannot edit another users message!");
  }
}

editMessage(newMessage, bussinUser, "PING PONG BUCK YA WIFE");
editMessage(newMessage, myUser, "GOOOOOOD MORNING");

console.log(newMessage);
