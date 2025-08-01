# User Management App with Frontend and Backend

A simple user management application built with Next.js that demonstrates both frontend and backend functionality.

## Features

- **Add Users**: Create new users with name and age
- **Edit Users**: Click the edit button to modify user details inline
- **Delete Users**: Remove users with confirmation dialog
- **Real-time Updates**: Changes are immediately reflected in the UI
- **Error Handling**: Proper error messages for failed operations
- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Age validation (0-150) and required fields

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Data Storage**: In-memory storage (for demo purposes)

## Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   └── users/
│   │       ├── route.ts          # GET /api/users, POST /api/users
│   │       └── [id]/
│   │           └── route.ts      # PUT /api/users/[id], DELETE /api/users/[id]
│   ├── page.tsx                  # Main page component
│   └── layout.tsx                # Root layout
├── components/
│   ├── AddUser.tsx              # Form component for adding users
│   ├── User.tsx                 # Individual user item component
│   └── UserList.tsx             # Main user list component
├── lib/
│   └── users.ts                 # Shared data store and helper functions
└── package.json
```

## API Endpoints

### GET /api/users
Returns all users.

**Response:**
```json
[
  {
    "id": "1234567890",
    "name": "John Doe",
    "age": 25,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### POST /api/users
Creates a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "age": 25
}
```

**Response:**
```json
{
  "id": "1234567890",
  "name": "John Doe",
  "age": 25,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### PUT /api/users/[id]
Updates a user.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "age": 30
}
```

### DELETE /api/users/[id]
Deletes a user.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env.local
   ```
   Then edit `.env.local` and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Add a User**: Fill in the name and age fields, then click "Add User"
2. **Edit a User**: Click the "Edit" button, modify the details, and click "Save"
3. **Delete a User**: Click the "Delete" button and confirm the action

## Development

- The application uses Next.js API routes for the backend
- Data is stored in memory (resets on server restart)
- All components are built with TypeScript for type safety
- Styling is done with Tailwind CSS for a modern, responsive design
- Form validation ensures data integrity

## Future Enhancements

- Add persistent storage (database)
- Add user authentication
- Add user profiles with more fields
- Add search and filtering
- Add pagination for large user lists
- Add dark mode support
- Add user statistics and analytics
