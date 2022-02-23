import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Badge,
} from "native-base";
import axios from "axios";
import { styles } from "../components/styles";
import { useFocusEffect } from "@react-navigation/native";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  let cancelToken;
  const getData = async () => {
    setLoading(true);
    const res = await axios.get("https://api.codingthailand.com/api/course", {
      cancelToken: cancelToken.token,
    });
    setProduct(res.data.data);
    setLoading(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      return () => {
        cancelToken.cancel();
      };
    }, [])
  );

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
  const _onRefresh = () => {
    getData();
  };
  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate("Detail", {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;
