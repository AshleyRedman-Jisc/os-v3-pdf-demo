import { FunctionComponent, PropsWithChildren } from 'react';
import { Page, StyleSheet, View, Image } from '@react-pdf/renderer';
import { SubTitle } from './Typeography';

const styles = StyleSheet.create({
    banner: {
        height: '62px',
        width: '100%',
        objectFit: 'cover'
    },
    logo: { position: 'absolute', top: '1.2%', left: '1%', width: '48px', height: '48px' },
    pageNumber: {
        position: 'absolute',
        top: '3.5%',
        right: '3%',
        color: '#ffffff'
    },
    pageTitle: {
        position: 'absolute',
        top: '3.8%',
        // left: '8%',
        color: '#ffffff'
    },
    page: {
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    section: {
        padding: '0 10px'
    }
});

export /**
 * @description Here we define a definitive `Page`
 * @param children A react tree of POSSIBLE children types
 * @returns PDF Page
 */
const TemplatePage: FunctionComponent<
    PropsWithChildren & {
        page: string;
        pageTitle?: string;
        header?: boolean;
        logo?: string;
        cover?: boolean;
    }
> = ({ children, page, pageTitle, header = true, logo, cover = false }) => {
    return (
        <Page orientation='landscape' size='A4' break style={styles.page}>
            {!!header && (
                <>
                    <Image src='/header2.jpg' style={styles.banner} />
                    {!!logo && <Image src={logo} style={styles.logo} />}
                    {!!pageTitle && (
                        <View style={{ ...styles.pageTitle, left: logo ? '8%' : '2.5%' }}>
                            <SubTitle text={pageTitle} />
                        </View>
                    )}
                    <View style={styles.pageNumber}>
                        <SubTitle text={`${page}`} />
                    </View>
                </>
            )}
            {cover ? <View>{children}</View> : <View style={styles.section}>{children}</View>}
        </Page>
    );
};
