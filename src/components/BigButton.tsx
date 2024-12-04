import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

/**
 * Component Properties:
 * - label: string - Button text
 * - color: string - Button background color
 * - style?: object - Optional custom styles
 * - featherIconName?: string - Optional icon name
 * - disabled?: boolean - Disables button when true
 * - onPress: function - Handler for button press
 *
 * Component Capabilities:
 * - Displays a full-width button with customizable text and color
 * - Can show an optional Feather icon
 * - Supports disabled state with reduced opacity
 * - Handles touch/press events
 */

interface BigButtonProps {
  label: string;
  color: string;
  style?: {};
  featherIconName?: keyof typeof Feather.glyphMap;
  disabled?: boolean;
  onPress: () => void;
}

export default function BigButton(props: BigButtonProps) {
  const styles = styling(props);
  const { featherIconName, label, style, onPress } = props;

  return (
    <RectButton style={[styles.button, style]} onPress={onPress}>
      {featherIconName && (
        <Feather
          style={styles.icon}
          name={featherIconName}
          size={24}
          color="#FFF"
        />
      )}
      <Text style={styles.label}>{label}</Text>
    </RectButton>
  );
}

const styling = ({ color, disabled }: BigButtonProps) =>
  StyleSheet.create({
    button: {
      paddingVertical: 14,
      paddingHorizontal: 32,
      backgroundColor: disabled ? color + "80" : color,
      borderRadius: 16,
      maxHeight: 56,

      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },

    icon: {
      marginRight: 8,
    },

    label: {
      fontFamily: "Nunito_800ExtraBold",
      color: "#FFF",
      fontSize: 15,
    },
  });
