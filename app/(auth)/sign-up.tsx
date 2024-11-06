import { Text, View, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "react-native";
import { useState } from "react";
import images from "@/constants/images";
import FormField from "@/components/auth/FormField";
import Button from "@/components/ui/Button";
import { Link } from "expo-router";
import { router } from "expo-router";
import { createUser } from "@/lib/appwrite";
import { useGlobalContext } from "@/contexts/GlobalProvider";

function SignUp() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setUser, setIsAuthenticated } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit() {
    const { name, email, password } = formValues;

    if (!name || !email || !password) {
      Alert.alert("Error!", "Please fill in all the fields");
    }

    setIsSubmitting(true);
    try {
      const result = await createUser(name, email, password);
      setUser(result);
      setIsAuthenticated?.(true);
      router.replace("/(tabs)/");
    } catch (error: any) {
      Alert.alert("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <SafeAreaView className="h-full bg-beige-200">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="text-3xl text-gray-900 font-sansBold mt-10 ">
            Sign Up
          </Text>

          <FormField
            title="Username"
            value={formValues.name}
            handleChangeText={(e) => setFormValues({ ...formValues, name: e })}
            otherStyles="mt-7"
            placeholder="Enter your fullname"
            keyboardType=""
          />

          <FormField
            title="Email"
            value={formValues.email}
            handleChangeText={(e) => setFormValues({ ...formValues, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Enter your email address"
          />

          <FormField
            title="Password"
            value={formValues.password}
            handleChangeText={(e) =>
              setFormValues({ ...formValues, password: e })
            }
            otherStyles="mt-6"
            keyboardType="password"
            placeholder="Enter a strong password"
          />
          <View className="w-full mt-6">
            <Button
              title="Sign Up"
              onPress={submit}
              className="mt-7"
              // isLoading={isSubmitting}
            />
          </View>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-900 font-sansRegular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-sansBold text-secondary-green"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUp;
