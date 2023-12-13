import { MyDocument } from './Document';
import { PDFViewer } from '@react-pdf/renderer';

function App() {
    return (
        <>
            <header>
                <h1 style={{ margin: '50px auto', textAlign: 'center' }}>
                    Online Surveys V3 PDF Demo
                </h1>
            </header>
            <main style={{ margin: '50px 0' }}>
                <PDFViewer
                    style={{ width: '80%', height: '900px', margin: 'auto', display: 'flex' }}
                >
                    <MyDocument />
                </PDFViewer>
            </main>
        </>
    );
}

export default App;
