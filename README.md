# Volunteam App

## Project Scope and Goal

Volunteam is a mobile application designed to connect volunteers with local events and opportunities. The app enables users to:

- View volunteer events on an interactive map
- Create and manage volunteer events
- Join existing volunteer opportunities
- Track event participation and volunteer slots
- Manage user authentication and profiles

## Development Environment Setup

### Prerequisites

1. Node.js and npm/yarn installed
2. Expo CLI: `npm install -g expo-cli`
3. JSON Server for mock backend
4. ImgBB account for image hosting
5. Google Maps API key

### Installation Steps

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   - Create a .env file in the root directory
   - Add your ImgBB API key:
     ```
     IMGBB_API_KEY=your_api_key_here
     ```

### Setting up the Mock API (json-server)

1. Get your computer's IP address
2. Update `src/services/api.ts` baseURL to:
   ```typescript
   baseURL: "http://your_ip_address_here:3333";
   ```
3. Run the mock server:
   ```bash
   npx json-server --watch db.json --port 3333 --host your_ip_address_here -m ./node_modules/json-server-auth
   ```

Alternatively, for online access:

- Set baseURL to: `https://my-json-server.typicode.com/<your-github-username>/<your-github-repo>`
- Ensure db.json is in the repo root

### Setting up Image Upload

1. Sign up at https://imgbb.com/signup
2. Get your API key
3. Add it to the .env file in your root folder
4. For local development, start the app with:
   ```bash
   IMGBB_API_KEY="your_api_key_here" npx expo start
   ```

## Running the Application

### Development Mode

1. Start the mock API server:

   ```bash
   npx json-server --watch db.json --port 3333 --host your_ip_address_here
   ```

2. Start the Expo development server:

   ```bash
   npx expo start
   ```

3. Use the Expo Go app on your mobile device or an emulator to run the application

### Building for Production

When ready to build or publish:

1. Push your environment secrets to EAS:

   ```bash
   eas secret:push
   ```

2. Build the app:
   ```bash
   eas build
   ```

## Testing Credentials

You can use any of the following test accounts from db.json:

- Email: luigi@carluccio.it
- Email: john@silva.com.br
  (Passwords available in db.json)
