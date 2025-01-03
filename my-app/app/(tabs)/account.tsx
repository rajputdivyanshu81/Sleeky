import { View ,Text} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function account(){
   return <SafeAreaView>
       <Text> account page</Text>
       <Link href="/accountinfo">
       <Text>accountinfo</Text>
       </Link>
       
   </SafeAreaView>;
}