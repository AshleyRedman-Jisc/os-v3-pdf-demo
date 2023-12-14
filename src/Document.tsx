import { Document, View, StyleSheet } from '@react-pdf/renderer';
import { Cover } from './Cover';
import { TemplatePage } from './TemplatePage';
import { BodyCopy } from './Typeography';
import { FunctionComponent } from 'react';
import { Survey } from './types';
import Html from 'react-pdf-html';
import ReactDOMServer from 'react-dom/server';
import { Choice } from './Questions/Choice';

const styles = StyleSheet.create({
    content: { fontSize: '14px' }
});

export const MyDocument: FunctionComponent<{ survey: Survey; notes?: boolean }> = ({
    survey,
    notes
}) => {
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
                <>
                    <TemplatePage page={`Page ${(i + 1).toString()}`} pageTitle={p.title}>
                        <View>
                            <BodyCopy text={p.description ?? ''} />
                        </View>
                    </TemplatePage>
                    {p.questions.map((q) => (
                        <>
                            {q.type === 'NOTE' && notes && (
                                <TemplatePage key={q.id} page={`Note`}>
                                    <View key={q.id}>
                                        <Html style={styles.content}>
                                            {'<style>*{color:grey;}strong{font-weight:bold;color:black;}</style>' +
                                                q.content}
                                        </Html>
                                    </View>
                                </TemplatePage>
                            )}
                            {q.type !== 'NOTE' && (
                                <TemplatePage key={q.id} page={`Question ${q.questionNumber}`}>
                                    <View key={q.id}>
                                        <BodyCopy text={q.title ?? ''} />

                                        {q.type === 'CHOICE' && (
                                            <View style={{ marginTop: '10px' }}>
                                                <BodyCopy text='Choice' />
                                                <Html>
                                                    {ReactDOMServer.renderToStaticMarkup(
                                                        <Choice question={q} />
                                                    )}
                                                </Html>
                                            </View>
                                        )}
                                    </View>
                                </TemplatePage>
                            )}
                        </>
                    ))}
                </>
            ))}
        </Document>
    );
};
