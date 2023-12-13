import { StyleSheet, Text } from '@react-pdf/renderer';
import { FunctionComponent } from 'react';

const styles = StyleSheet.create({
    documentTitle: {
        fontSize: '36px',
        position: 'absolute',
        top: '40%',
        left: '10%',
        color: '#ffffff',
        width: '80%'
    },
    pageTitle: {
        backgroundColor: '#ffffff'
    },
    subTitle: {
        fontSize: '14px'
    },
    bodyCopy: {
        fontSize: '12px',
        margin: '4px 0'
    }
});

export const DocumentTitle: FunctionComponent<{ text: string }> = ({ text }) => {
    return <Text style={styles.documentTitle}>{text}</Text>;
};

export const PageTitle: FunctionComponent<{ text: string }> = ({ text }) => {
    return <Text style={styles.pageTitle}>{text}</Text>;
};

export const SubTitle: FunctionComponent<{ text: string }> = ({ text }) => {
    return <Text style={styles.subTitle}>{text}</Text>;
};

export const BodyCopy: FunctionComponent<{ text: string }> = ({ text }) => {
    return <Text style={styles.bodyCopy}>{text}</Text>;
};
