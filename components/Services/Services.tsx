import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import funeralHomeIcon from "../../assets/icons/funeralHome.png";
import cemeteryIcon from "../../assets/icons/cemeteryIcon.png";
import headstoneIcon from "../../assets/icons/headstoneIcon.png";
import attorneyIcon from "../../assets/icons/attorneyIcon.png";
// import memorialConsultingIcon from "../../assets/icons/memorialConsultingIcon.png";
import insuranceIcon from "../../assets/icons/insuranceIcon.png";

const Services = () => {
  const servicesList = [
    {
      name: "Funeral Homes",
      icon: funeralHomeIcon,
    },
    {
      name: "Cemeteries",
      icon: cemeteryIcon,
    },
    {
      name: "Headstones",
      icon: headstoneIcon,
    },
    {
      name: "Attorneys",
      icon: attorneyIcon,
    },
    {
      name: "Memorial Consulting",
      icon: insuranceIcon,
    },
    {
      name: "Insurance",
      icon: insuranceIcon,
    },
  ];

  const ServiceItem = ({ title, icon }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={icon} style={{ height: 25, width: 25 }} />
        <Text style={styles.itemName}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>

      <View style={styles.serviceListContainer}>
        {servicesList.map((service, index) => (
          <ServiceItem key={index} title={service.name} icon={service.icon} />
        ))}
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#3E69FE",
    width: "30%",
    gap: 5,
    height: 80,
  },
  serviceListContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
  itemName: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 18,
  },
});
