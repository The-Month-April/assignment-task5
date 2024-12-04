import { createContext } from "react";
import { User } from "../types/User";

/**
 * Authentication Context Configuration
 *
 * Component Properties:
 * - value: Current user object
 * - setValue: Function to update user state
 *
 * Component Capabilities:
 * - Manages global user authentication state
 * - Provides user data access throughout the app
 * - Handles user login/logout state updates
 *
 * Class Responsibilities:
 * - Maintains user authentication status
 * - Provides context for user-related data
 * - Enables authentication state management across components
 */

export type AuthenticationContextObject = {
  value: User;
  setValue: (newValue: User | undefined) => void;
};

export const AuthenticationContext =
  createContext<AuthenticationContextObject | null>(null);
