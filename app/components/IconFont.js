import React from "react";
import { Text } from "react-native";

const IconFont = ({ name, color , size = 18,style ,...extra}) => {
  return (
    <Text
      {...extra}
      style={[{
        fontFamily: "iconfont",
        fontSize: size,
        color:color||"#fff"
      },style]}
    >
      {name.toString()}
    </Text>
  );
};

export default IconFont;
