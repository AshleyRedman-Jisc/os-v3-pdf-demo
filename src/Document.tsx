import { Document, View } from '@react-pdf/renderer';
import { Cover } from './Cover';
import { TemplatePage } from './TemplatePage';
import { BodyCopy } from './Typeography';
import { FunctionComponent } from 'react';
import { Survey } from './types';

// const styles = StyleSheet.create({
//     section: {
//         margin: 10,
//         padding: 10
//     }
// });

export const MyDocument: FunctionComponent<{ survey: Survey }> = ({ survey }) => {
    return (
        <Document
            title='Online Surveys V3 Demo'
            author='Ashley Redman'
            subject='PDF Testing'
            keywords='pdf'
            creator='Ashley Redman'
            producer='Online Surveys'
            pdfVersion='1.7'
            language='English'
            pageMode='fullScreen'
            pageLayout='oneColumn'
            onRender={(e) => console.log({ e })}
        >
            <Cover title={survey.name} logo={survey.survey.logo?.url} />

            {survey.survey.pages.flatMap((p, i) => (
                <TemplatePage key={p.id} page={i + 1} pageTitle={p.title}>
                    {p.questions.map((q) => (
                        <View key={q.id}>
                            <BodyCopy text={q.title ?? ''} />
                        </View>
                    ))}
                </TemplatePage>
            ))}

            {/* <TemplatePage page={1} pageTitle='This is my page title'>
                <View style={styles.section}>
                    <BodyCopy text='Image from URL source' />
                    <Image
                        style={{ width: '50%' }}
                        src='https://media.licdn.com/dms/image/C561BAQErJs8LwcqoSw/company-background_10000/0/1639657577961/jisc_data_analytics_cover?e=2147483647&v=beta&t=r7lJLh3k7eXfqAbPxDH-vqOjWVfyQfQwrbTqDNfVnnA'
                    />
                </View>
                <View style={styles.section}>
                    <BodyCopy text='Image from base64 string' />
                    <Image
                        style={{ width: '10%' }}
                        src='data:image/jpeg;base64,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'
                    />
                </View>
            </TemplatePage>
            <TemplatePage page={2} pageTitle='This is another page'>
                <View style={styles.section}>
                    <BodyCopy text='Another page content' />
                </View>
            </TemplatePage> */}
        </Document>
    );
};
