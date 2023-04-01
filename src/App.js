import React from "react";
import { StyleSheet } from "react-native";
import Timeline from "react-native-timeline-flatlist";

let data = [
  {
    // time: "09:00",
    title: "Módulo 1",
    description: "- Introdução a programação \n - Tecnologia Web I",
    icon: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png"
  },
  {
    // time: "10:45",
    title: "Módulo 2",
    description: "- Tecnologia Web II \n - Programação Web I",
    icon: "https://cdn-icons-png.flaticon.com/512/149/149077.png"
  },
  {
    // time: "14:00",
    title: "Módulo 3",
    description: "- Tecnologia Web III \n - Programação Web II ",
    icon: "https://cdn-icons-png.flaticon.com/512/149/149077.png"
  },
  {
    // time: "16:30",
    title: "Módulo 4",
    description: "- Teste de Software \n - Introdução á nuvem",
    icon: "https://cdn-icons-png.flaticon.com/512/149/149077.png"
  }
];
function App() {
  return (
    <Timeline
      style={styles.list}
      data={data}
      circleSize={20}
      circleColor="transparent"
      lineColor="gray"
      timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
      // timeStyle={{
      //   textAlign: "center",
      //   backgroundColor: "#ff9797",
      //   color: "white",
      //   padding: 5,
      //   borderRadius: 13,
      //   overflow: "hidden"
      // }}
      innerCircle={"icon"}
      detailContainerStyle={data.map((value, index, array) => {
        if (
          value.icon ===
          "https://cdn-icons-png.flaticon.com/512/1161/1161388.png"
        ) {
          return {
            marginBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 20,
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            maxWidth: 180
          };
        } else if (
          value.icon === "https://cdn-icons-png.flaticon.com/512/149/149077.png"
        ) {
          return {
            marginBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 20,
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            maxWidth: 180
          };
        }
      })}
      descriptionStyle={{ color: "gray" }}
      options={{
        style: { paddingTop: 5 }
      }}
    />
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
