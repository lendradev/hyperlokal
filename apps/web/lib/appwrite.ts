import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!); // Replace with your project IDID

export const account = new Account(client);
export { ID } from "appwrite";
