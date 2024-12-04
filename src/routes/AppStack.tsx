/**
 * Component Properties:
 * - authenticatedUser: User state for the current logged-in user
 * - authenticationContextObj: Context object containing user value and setter
 *
 * Component Capabilities:
 * - Manages application-wide navigation structure
 * - Provides authentication context to all child components
 * - Handles navigation between Login and EventsMap screens
 * - Maintains user authentication state
 *
 * Functions Inputs/Outputs:
 * - setAuthenticatedUser: (user: User | undefined) => void
 *   Input: User object or undefined
 *   Output: Updates authentication state
 */

import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Login from "../pages/Login";
import EventsMap from "../pages/EventsMap";
import {
  AuthenticationContext,
  AuthenticationContextObject,
} from "../context/AuthenticationContext";
import { User } from "../types/User";

export default function Routes() {
  const [authenticatedUser, setAuthenticatedUser] = useState<User>();

  const authenticationContextObj: AuthenticationContextObject = {
    value: authenticatedUser as User,
    setValue: setAuthenticatedUser,
  };

  return (
    <AuthenticationContext.Provider value={authenticationContextObj}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#F2F3F5" },
          }}
        >
          <Screen name="Login" component={Login} />

          <Screen name="EventsMap" component={EventsMap} />
        </Navigator>
      </NavigationContainer>
    </AuthenticationContext.Provider>
  );
}
