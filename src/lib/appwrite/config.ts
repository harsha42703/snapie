import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL || 'https://cloud.appwrite.io/v1',
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || '655714c6263c09084cd7',
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '65571ab61e4d1561f6c5',
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID || '65571a8262ae005f0bb2',
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID || '65571b41b12ecb46cb29',
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID || '65571ae35ef5be4ba8dd',
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID || '65571b5b163478cdf5db',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
