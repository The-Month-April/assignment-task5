/**
 * Interface Properties:
 * - name: Object containing first and last name
 * - email: User's email address
 * - id: Unique user identifier
 * - mobile: User's mobile number
 *
 * Component Capabilities:
 * - Defines user data structure
 * - Ensures type safety for user information
 */

export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  id: string;
  mobile: string;
}
