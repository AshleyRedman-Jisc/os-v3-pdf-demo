import { MyDocument } from './Document';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

function App() {
    return (
        <>
            <header>
                <h1 style={{ margin: '50px auto', textAlign: 'center' }}>
                    Online Surveys V3 PDF Demo
                </h1>
            </header>
            <main style={{ margin: '50px 0' }}>
                <p style={{ display: 'block', width: '80%', margin: '0 auto 40px' }}>
                    The below is a PDF renderer. This is usual for displaying the PDF prior to
                    download.
                </p>
                <p style={{ display: 'block', width: '80%', margin: '0 auto 40px' }}>
                    This can also be directly downloaded via a special download link:{' '}
                    <PDFDownloadLink document={<MyDocument />} fileName='my-file-name'>
                        Download link here
                    </PDFDownloadLink>
                </p>
                <p style={{ display: 'block', width: '80%', margin: '0 auto 40px' }}>
                    What is downloaded from the above link is the <strong>same</strong> pdf that is
                    being rendered in the below viewer.
                </p>
                <PDFViewer
                    showToolbar
                    style={{ width: '80%', height: '900px', margin: 'auto', display: 'flex' }}
                >
                    <MyDocument />
                </PDFViewer>
            </main>
        </>
    );
}

export default App;
