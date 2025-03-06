import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import BBHeader from "@/components/ui/shared/Header.component";
import ContentContainer from "@/components/ui/shared/ContentContainer";
import BBInputText from "@/components/ui/shared/Input.component";
import { LucideEye } from "lucide-react-native";
import BBButton from "@/components/ui/shared/Button.component";
import BBLinkButton from "@/components/ui/shared/LinkButton.component";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    setValid(user.trim() !== "" && password.trim() !== "");
  }, [user, password]);

  return (
    <>
      <BBHeader />
      <ContentContainer title="Iniciar Sesión">
        <BBInputText
          value={user}
          labelText={"Usuario"}
          onChangeText={(user) => {
            setUser(user);
          }}
        />
        <BBInputText
          value={password}
          labelText={"Contraseña"}
          rightIcon={() => <LucideEye size={16} color={"black"} />}
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
        <BBButton
          children="Iniciar sesión"
          onPress={() => {
            router.push("/simulator");
          }}
          disabled={!isValid}
        />
        <BBLinkButton
          children="Olvidé mi usuario o contraseña"
          onPress={() => {}}
        />
      </ContentContainer>
    </>
  );
}
