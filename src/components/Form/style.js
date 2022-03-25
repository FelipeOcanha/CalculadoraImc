import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#ffff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10
    },
    formLabel: {
        color: "#00000",
        fontSize: 18,
        paddingLeft: 20
    },
    formTextInput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    formTextButtonCalculator: {
        fontSize: 20,
        color: '#f6f6f6'
    },
    formButtoncalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FF0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    formTextLabelWarning: {
        fontSize: 20,
        color: '#f6f6f6'
    }
});

export default styles