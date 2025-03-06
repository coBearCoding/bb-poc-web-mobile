import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import BBHeader from "@/components/ui/shared/Header.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBInputText from "@/components/ui/shared/Input.component";
import { LucideEye, LucideLogOut } from "lucide-react-native";
import BBButton from "@/components/ui/shared/Button.component";
import BBLinkButton from "@/components/ui/shared/LinkButton.component";
import { LoadScript } from "@preflower/react-native-web-maps";

export default function LoginWebPage() {
  const router = useRouter();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    setValid(user.trim() !== "" && password.trim() !== "");
  }, [user, password]);
  return (
    <>
      <BBHeader
        trailingButtonIcon={() => <LucideLogOut size={24} color="#212529" />}
      />
      <ContentContainer
        title="Iniciar Sesión"
        buttons={
          <>
            <View>
              <BBButton
                children="Iniciar sesión"
                onPress={() => {
                  router.push("/simulator");
                }}
                disabled={!isValid}
              />
            </View>
            <View>
              <BBLinkButton
                children="Olvidé mi usuario o contraseña"
                onPress={() => {}}
              />
            </View>
          </>
        }
      >
        <View style={{ gap: 24 }}>
          <BBInputText
            value={user}
            labelText={"Usuario"}
            onChangeText={(user) => {
              console.log(user);
              setUser(user);
            }}
          />
          <BBInputText
            value={password}
            labelText={"Contraseña"}
            rightIcon={() => <LucideEye size={16} color={"black"} />}
            secureTextEntry={true}
            onChangeText={(password) => {
              console.log(user);
              setPassword(password);
            }}
          />
          {/* <View style={styles.footerContainer}>
            <BBButton
              children="Iniciar sesión"
              onPress={() => {
                router.replace("/simulator");
              }}
              disabled={!isValid}
            />
            <BBLinkButton
              children="Olvidé mi usuario o contraseña"
              onPress={() => {}}
            />
          </View> */}
        </View>
      </ContentContainer>
    </>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 32,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
