import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers, addUser } from '@/lib/users';

// GET /api/users - Get all users
export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, age } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    if (!age || typeof age !== 'number' || age < 0 || age > 150) {
      return NextResponse.json(
        { error: 'Age is required and must be a valid number between 0 and 150' },
        { status: 400 }
      );
    }

    const newUser = await addUser(name, age);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
} 