import User from '../models/User';

export interface User {
  _id?: string;
  id: string;
  name: string;
  age: number;
  createdAt: Date;
}

export const addUser = async (name: string, age: number): Promise<User> => {
  const newUser = new User({
    name: name.trim(),
    age: age,
  });
  await newUser.save();
  return newUser.toObject();
};

export const updateUser = async (id: string, updates: Partial<User>): Promise<User | null> => {
  const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
  return updatedUser?.toObject() || null;
};

export const deleteUser = async (id: string): Promise<User | null> => {
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser?.toObject() || null;
};

export const getAllUsers = async (): Promise<User[]> => {
  const users = await User.find().sort({ createdAt: -1 });
  return users.map(user => user.toObject());
};

export const getUserById = async (id: string): Promise<User | null> => {
  const user = await User.findById(id);
  return user?.toObject() || null;
}; 