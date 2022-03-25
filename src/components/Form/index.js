import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style.js"

export default function Form(){
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [messageImc, setMessageImc] = useState("")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [isError, setIsError] = useState(false);

    function imcCalculator(){
        height = useState(height.replace(',', '.'))
        setWeight(weight.replace(',', '.'))
        return setImc((weight/(height*height)).toFixed(2))
    }
    
    function isValuesOk(){
        if(weight != '' && height != '')
        {
            imcCalculator()
            setHeight('')
            setWeight('')
            setIsError(false)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular Novamente")
        }
        else
        {
            setImc(null)
            setIsError(true)
            setTextButton("Calcular IMC")
            setMessageImc("Preencha o peso e a altura")
        }
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.formTextInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formTextInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />

                <TouchableOpacity 
                    style={styles.formButtoncalculator}
                    onPress={() => isValuesOk()}
                >
                    <Text 
                        style={styles.formTextButtonCalculator}
                    >{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} hasErros={isError}/>
        </View>
    );
}