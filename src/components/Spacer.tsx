import React from "react";
import { View } from "react-native";

/**
 * Component Properties:
 * - size?: number - Space size in pixels (default: 8)
 * - horizontal?: boolean - Direction of spacing (default: false for vertical)
 *
 * Component Capabilities:
 * - Creates empty space between components
 * - Can provide either vertical or horizontal spacing
 * - Supports customizable spacing size
 */

interface SpacerProps {
  size?: number;
  horizontal?: boolean;
}

export default function Spacer({ size = 8, horizontal = false }: SpacerProps) {
  return (
    <View
      style={{
        width: horizontal ? size : "auto",
        height: !horizontal ? size : "auto",
      }}
    />
  );
}
