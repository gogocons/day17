# day17

You need to run `npm install` after forking and cloning this repo, to install all the dependencies!

## tsx instructions for reference

Local installation

If you're using it in an npm project, install it as a development dependency:

`npm install --save-dev tsx`

You can reference it directly in the package.json#scripts object:

{
    "scripts": {
        "dev": "tsx ..."
    }
}

To use the binary, you can call it with npx while in the project directory:

`npx tsx ...`

## Exercises:

1) Create a function that accepts an array of strings, and prints out each one in a loop.

2) Create a function that takes 3 numbers, adds them together, and returns them as a number.

3) Create a function that takes a string as an argument, and returns a promise to return "hello" plus that string, as a string..

4) Create a function that accepts a single array where the elements can be strings OR numbers OR booleans. Loop over the array, and if the element is a string, print the string plus the text "is a string". If it's a number, print out the number plus "is a number". If it's a boolean, print out the boolean plus "is a boolean".

5) Objects can be types, declared like this:

type MyObject = {
    user: string;
}

const me: MyObject = {
    user: "Horsey"
}

function printUser(obj: MyObject) {
    console.log(obj.user);
}

Knowing this, create a type that represents a discord user that has the following properties:
name, which is a string
isAdmin, which is a boolean
isGMI, which is a boolean
and roles, which is an array of strings.

Then, create a type that represents a discord message that has the following properties:
user, which is type DiscordUser
text, which is a string
keks, which is a number.

6) Create functions that use your types:
- addKekToMessage which takes a discord message
- canDeleteServer which takes a discord user and checks if they are admin or not before returning a boolean
- editMessage which takes a discord message, a discorduser, and newText, and IF the user name is the same as the user on the discordmessage itself, allows them to edit the message.

7) Create a type that represents an NFT, with properties like imageURL, name, currentOwnerAddress, openSeaFloorPrice, and description.

8) Create a function that accepts an array of NFTs and returns the one with the lowest floor price. Not the floor price itself, but it returns an NFT. `getCheapestNft`