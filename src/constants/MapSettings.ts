import { EdgePadding, LatLng, Region } from "react-native-maps";

/**
 * Constants for Map Configuration
 *
 * Functions Outputs:
 * - DEFAULT_POSITION: Default center coordinates for Calgary
 * - DEFAULT_DELTA: Default zoom level for map view
 * - DEFAULT_REGION: Combined position and zoom settings
 * - EDGE_PADDING: Padding settings for map edges
 *
 * Component Capabilities:
 * - Provides consistent map initialization settings
 * - Defines standard map padding for UI elements
 * - Sets default map focus on Calgary area
 */

export const DEFAULT_POSITION: LatLng = {
  latitude: 51.03,
  longitude: -114.093,
};

export const DEFAULT_DELTA = { latitudeDelta: 0.008, longitudeDelta: 0.008 };

export const DEFAULT_REGION: Region = {
  ...DEFAULT_POSITION,
  ...DEFAULT_DELTA,
};

export const EDGE_PADDING: EdgePadding = {
  top: 64,
  right: 16,
  bottom: 104,
  left: 16,
};
