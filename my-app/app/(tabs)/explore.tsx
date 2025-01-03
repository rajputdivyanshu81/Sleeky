 
import { useState } from "react";
 import { View ,Text, Button} from "react-native";
 import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "@/components/BottomSheet";


 export default function explore(){
    const [picture, setPicture] = useState(false);
    return <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
        <Text>Account</Text>
        <Button title="Open Bottom Sheet" onPress={()=>{
            setPicture(true);
        }}></Button>
        {picture && <DownloadPicture onClose={() => setPicture(false)} />}
        </View>
        
    </SafeAreaView>;
}