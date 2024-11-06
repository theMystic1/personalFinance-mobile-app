import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { images } from "../../constants";
import { Image } from "react-native";
// import FormField from "@/components/FormField";
import { useState } from "react";
// import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { Alert } from "react-native";
// import { signIn } from "@/lib/appwrite";
import { router } from "expo-router";
import images from "@/constants/images";
import FormField from "@/components/auth/FormField";
import Button from "@/components/ui/Button";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import { signIn } from "@/lib/appwrite";
// import { useGlobalContext } from "@/context/GlobalProvider";

function SignIn() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsAuthenticated } = useGlobalContext();

  async function submit() {
    const { email, password } = formValues;

    if (!email || !password) {
      Alert.alert("Error!", "Please fill in all the fields");
    }

    setIsSubmitting(true);
    try {
      const result = await signIn(email, password);
      // set to global state
      setUser(result);
      setIsAuthenticated(true);
      router.replace("/(tabs)/");
    } catch (error: any) {
      Alert.alert("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="text-2xl text-gray-900 font-sansBold mt-10 ">
            Sign in
          </Text>

          <FormField
            title="Email"
            value={formValues.email}
            handleChangeText={(e) => setFormValues({ ...formValues, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Email Address"
          />

          <FormField
            title="Password"
            value={formValues.password}
            handleChangeText={(e) =>
              setFormValues({ ...formValues, password: e })
            }
            otherStyles="mt-6"
            keyboardType="password"
            placeholder="Password"
          />
          <View className="w-full mt-6">
            <Button
              title="Log In"
              onPress={submit}
              className="mt-7"
              // isLoading={isSubmitting}
            />
          </View>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-900 font-sansRegular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-sansBold text-secondary-green"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignIn;
