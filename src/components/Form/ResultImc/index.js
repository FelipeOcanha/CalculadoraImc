import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

function selectStyle(hasError, messageResultImc){
    if(messageResultImc != '')
    {
        if(hasError)
            return styles.formLabelWarning;
        else
            return styles.formLabelSuccess;
    }
    else
        return null;
}
export default function ResultImc(props){
    return (
        <View style={selectStyle(props.hasErros, props.messageResultImc)}>
                <Text style={styles.messageAdjust}>{props.messageResultImc} {props.resultImc}</Text>
        </View>
    );
}