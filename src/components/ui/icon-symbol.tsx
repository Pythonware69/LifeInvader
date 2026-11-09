import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { ComponentProps } from "react";
import { Platform } from "react-native";

const MAPPING = {
  "add.circle.fill": {
    materialIcons: "add-circle",
    fontAwesome: "plus-circle",
    fontAwesome5: "plus-circle",
  },
} as const;

type IconSymbolProps = Omit<ComponentProps<typeof FontAwesome>, "name"> & {
  name: keyof typeof MAPPING;
};

export function IconSymbol({ name, color, size, style }: IconSymbolProps) {
  const mapping = MAPPING[name];

  if (Platform.OS === "android") {
    return (
      <MaterialIcons
        color={color}
        size={size}
        name={mapping.materialIcons}
        style={style}
      />
    );
  }

  if (Platform.OS === "web") {
    return (
      <FontAwesome5
        color={color}
        size={size}
        name={mapping.fontAwesome5}
        style={style}
      />
    );
  }

  return (
    <FontAwesome
      color={color}
      size={size}
      name={mapping.fontAwesome}
      style={style}
    />
  );
}
