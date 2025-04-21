import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable");
}

// Define interface for the cached connection
interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Update global declaration
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Use the interface for the cached connection
const cached: MongooseConnection = global.mongoose || {
  conn: null,
  promise: null,
};

// Update the global cache
if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
