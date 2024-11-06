import {
  Client,
  Account,
  ID,
  Databases,
  Avatars,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.pfn.pfa",
  projectId: "670d2d7d003b9582236e",
  databaseId: "670d2df7002fd1d1005c",
  userCollectionId: "670d117100208f12fa1b",
  transactionCollectionId: "670d106d0027701740bc",
  storageId: "670d1c3a0001f04a8259",
};

const client = new Client();

client.setProject(config.projectId).setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// serialize the transaction, pots, and budgets, balance field b4 retrieving and sending to database

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const response = await account.create(ID.unique(), email, password, name);

    if (!response) throw Error;

    const avatarUrl = avatars.getInitials(name);

    await signIn(email, password);

    const newUserData = {
      accountId: response.$id,
      email,
      name,
      avatar: avatarUrl,
    };

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      newUserData
    );

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
}

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
}

export async function getCurUser() {
  try {
    const curAcc = await account.get();

    if (!curAcc) throw new Error("Account not found");

    // Query for the current user's document
    const curUserList = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", curAcc.$id)] // Correct usage
    );

    if (curUserList.documents.length > 0) {
      const curUser = curUserList.documents[0]; // Assuming only one user is expected
      return curUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
