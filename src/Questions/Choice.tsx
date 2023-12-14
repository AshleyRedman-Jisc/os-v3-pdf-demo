import { FunctionComponent } from 'react';
import { ChoiceQuestion } from '../types';

export const Choice: FunctionComponent<{ question: ChoiceQuestion }> = ({ question }) => {
    return (
        <fieldset>
            {question.values.map((v) => (
                <label style={{ margin: '0 0 10px 0', display: 'block' }}>
                    <span style={{ fontSize: '12px', display: 'inline-block' }}>{v.value}</span>
                    {/* <input
                        value={v.id}
                        type={question.multicheck ? 'checkbox' : 'radio'}
                        style={{ width: '10px', height: '10px' }}
                        checked
                    /> */}
                    <span
                        style={{
                            height: '10px',
                            width: '10px',
                            border: '1px solid black',
                            display: 'block'
                        }}
                    />
                </label>
            ))}
        </fieldset>
    );
};
