import { StyleSheet, View, Text } from "react-native";
import React from "react";

import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";

const validateSchema = Yup.object().shape({
  name: Yup.string().required("กรุณาป้อนชื่อ-สกุล"),
  email: Yup.string()
    .email("รูปแบบอีเมล์ไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล์ใหม่"),
  password: Yup.string()
    .min(3, "รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป")
    .required("กรุณาป้อนรหัสผ่านใหม่"),
});

const RegisterScreen = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const url = "https://api.codingthailand.com/api/register";
              const res = await axios.post(url, {
                name: values.name,
                email: values.email,
                password: values.password,
              });
              alert(res.data.message);
              navigation.navigate("Home");
            } catch (error) {
              alert(error.response.data.errors.email[0]);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.name && touched.name ? true : false}
              >
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.name}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}
              >
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType={"email-address"}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.password && touched.password ? true : false}
              >
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                block
                large
                style={{ marginTop: 30, backgroundColor: "#E9AB17" }}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Register
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
