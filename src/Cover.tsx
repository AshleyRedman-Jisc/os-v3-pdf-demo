import { Image, StyleSheet, View } from '@react-pdf/renderer';
import { FunctionComponent } from 'react';
import { TemplatePage } from './TemplatePage';
import { DocumentTitle } from './Typeography';

const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: '1%',
        left: '1%',
        width: '80px',
        height: '80px'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    overlay: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
});

export const Cover: FunctionComponent<{ title: string; logo?: string }> = ({ title, logo }) => {
    console.log({ logo });

    return (
        <TemplatePage header={false} page={0} cover>
            <View style={styles.overlay}>
                <Image src='/cover2.jpg' style={styles.backgroundImage} />
                {!!logo && <Image src={logo} style={styles.logo} />}
                <DocumentTitle text={title} />
            </View>
        </TemplatePage>
    );
};
