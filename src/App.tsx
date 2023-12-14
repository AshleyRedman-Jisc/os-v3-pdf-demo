import { MyDocument } from './Document';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Survey } from './types';
import { FormEventHandler, useState } from 'react';

const s = {
    id: 'test',
    name: 'This is my survey!',
    survey: {
        pages: [
            {
                id: 1,
                title: 'Postgraduate Taught Experience Survey (PTES) 2023',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuooio10000356dm3mwa11x',
                        type: 'NOTE',
                        content:
                            '<p><strong>Welcome</strong></p><p style="text-align: start">This survey invites you to share your experiences of your postgraduate taught degree. The survey should only take around 15 minutes to complete. Please know that your participation is greatly appreciated. Your feedback will be combined with those of others to help improve the learning experience of students like you.&nbsp;</p><p style="text-align: start">Thank you for your time.</p>',
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_DELETE'
                    },
                    {
                        id: 'clbuootfq0001356d6tkkatui',
                        type: 'NOTE',
                        content:
                            '<p><strong>Data Protection</strong></p><p style="text-align: start">Before you start the survey, please read this privacy statement which tells you how any personal data you submit with your responses to this survey will be utilised and protected, and the rights you have in relation to it.</p>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbuop7t40002356dbz7lsjmh',
                        type: 'NOTE',
                        content:
                            "<p><strong><em>[Institution to&nbsp;insert here a hyperlink to your institution's privacy&nbsp;statement. We suggest that you seek advice in order to comply with the General Data Protection Regulation as the data controller]</em></strong></p>",
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_DELETE'
                    },
                    {
                        id: 'clbuopg7t0003356d7qapybwd',
                        type: 'NOTE',
                        content:
                            '<p>Your participation in this questionnaire is voluntary and you can stop at any point without your responses being included in the dataset.&nbsp;</p>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbuopuru0004356ddo4l4287',
                        type: 'CHOICE',
                        title: 'In order to participate, please tick below to confirm that you have read and understood the Privacy Notice and you consent to the use of your personal data as described:',
                        values: [{ id: 0, value: 'I consent' }],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: true,
                        multicheck: true,
                        preventChange: 'NO_RULE',
                        questionNumber: 1
                    },
                    {
                        id: 'clbuor4920005356d6pbtsq8d',
                        type: 'NOTE',
                        content:
                            '<p><em>You can withdraw your consent at any time in the future by contacting </em><strong><em>[institution to insert appropriate contact details].</em></strong></p>',
                        isLocked: false,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_DELETE'
                    }
                ],
                showTitle: false,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 9993960291,
                title: 'Untitled page',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuoy1w80006356donrxbwv2',
                        type: 'NOTE',
                        content:
                            '<h3>Notes for completion</h3><p style="text-align: start">The questionnaire should take <strong>around fifteen minutes</strong> to complete.&nbsp;</p><p style="text-align: start">Where "course" is used in the questionnaire, this refers to your whole programme of study at your institution e.g. MA Archaeology, MSc Scientific Measurement, PGCE, Diploma in Democracy.</p><p style="text-align: start">After each section you may&nbsp;be asked for any further comments on the issues covered, to enable staff to gain a better understanding of what has gone well and what has worked less well. <strong>Please do not identify yourself or other individuals (including staff) in your comments. </strong>If you&nbsp;have a complaint or need support with any of the issues raised within the survey, please contact <strong><em>[the relevant service at your institution]</em></strong><em>.</em></p>',
                        isLocked: false,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_DELETE'
                    },
                    {
                        id: 'clbuoyx330007356dovqouerx',
                        type: 'NOTE',
                        content: '<h3>Teaching and Learning</h3>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbuoza4k0008356d7g1obpu1',
                        rows: [
                            { id: 0, value: 'Staff are good at explaining things' },
                            { id: 1, value: 'Staff are enthusiastic about what they are teaching' },
                            { id: 2, value: 'The course is intellectually stimulating' },
                            { id: 3, value: 'The course has enhanced my academic ability' },
                            {
                                id: 4,
                                value: 'The learning materials provided on my course are useful'
                            },
                            {
                                id: 5,
                                value: 'There is sufficient contact time (in-person or virtual/online) between staff and students to support effective learning'
                            },
                            {
                                id: 6,
                                value: 'I am happy with the support for my learning I receive from staff on my course'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statements regarding teaching and learning on your course?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 2
                    },
                    {
                        id: 'clbup212q0009356diq40a5bq',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 3,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: false,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 2147636546,
                title: 'Engagement',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbup48gm000b356dhqb6hdoa',
                        rows: [
                            {
                                id: 0,
                                value: 'I am encouraged to ask questions or make contributions in taught sessions (in-person or virtual/online)'
                            },
                            {
                                id: 1,
                                value: 'The course has created sufficient opportunities to discuss my work with other students (in-person or virtual/online)'
                            },
                            { id: 2, value: 'My course has challenged me to produce my best work' },
                            { id: 3, value: 'The workload on my course has been manageable' },
                            {
                                id: 4,
                                value: 'I have appropriate opportunities to give feedback on my experience'
                            }
                        ],
                        type: 'GRID',
                        title: 'Overall, to what extent do you agree or disagree with the following statements regarding engagement on your course?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 4
                    },
                    {
                        id: 'clbup76z8000c356dmg26xyta',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 5,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 9334196879,
                title: 'Community',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbup8i8u000d356dczb1tk4y',
                        rows: [
                            {
                                id: 0,
                                value: 'I feel part of a community of postgraduate taught students'
                            },
                            { id: 1, value: 'I feel a sense of belonging at my institution' },
                            {
                                id: 2,
                                value: 'There are sufficient opportunities to interact with other postgraduate taught students'
                            }
                        ],
                        type: 'GRID',
                        title: 'Overall, to what extent do you agree or disagree with the following statements regarding engagement on your course?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 6
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 4999949476,
                title: 'Assessment and Feedback',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbupbpmk000g356dch9c5j8m',
                        rows: [
                            {
                                id: 0,
                                value: 'The criteria used in marking have been made clear in advance'
                            },
                            { id: 1, value: 'Assessment arrangements and marking have been fair' },
                            { id: 2, value: 'Feedback on my work has been prompt' },
                            {
                                id: 3,
                                value: 'Feedback on my work (written or oral) has been useful'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statements regarding assessment and feedback on your course? (Feedback includes oral and written feedback given in both formal and informal contexts)',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 7
                    },
                    {
                        id: 'clbupe4ap000h356dovdl6qt1',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 8,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clbupgp6z000i356d0bka2428',
                        type: 'CHOICE',
                        title: 'Section routing',
                        values: [
                            { id: 0, value: 'dissertation' },
                            { id: 1, value: 'dissertation resources' },
                            { id: 2, value: 'dissertation skills' },
                            { id: 3, value: 'dissertation skills resources' },
                            { id: 4, value: 'dissertation support' },
                            { id: 5, value: 'dissertation support resources' },
                            { id: 6, value: 'dissertation support skills' },
                            { id: 7, value: 'skills' },
                            { id: 8, value: 'skills resources' },
                            { id: 9, value: 'support' },
                            { id: 10, value: 'support resources' },
                            { id: 11, value: 'support skills' },
                            { id: 12, value: 'support skills resources' },
                            { id: 13, value: 'dissertation support skills resources' },
                            { id: 14, value: 'none' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        prePopulation: { param: 'routing', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 9,
                        prePopulationParam: 'routing',
                        prePopulationVisibility: 'HIDE'
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 4852708846,
                title: 'Dissertation or Major Project',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbupj59q000j356dsdrmvjzq',
                        type: 'NOTE',
                        content:
                            '<p>If you are unsure what Dissertation or Major Project refers to, it could include a long-essay, independent research project, laboratory project, or other major supervised assessment task that forms an important part of your overall course.</p>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbupjlb4000k356dtilletp9',
                        type: 'CHOICE',
                        title: 'Are you currently planning, undertaking, or have completed, a dissertation or major project as part of your course?',
                        values: [
                            { id: 0, value: 'Yes' },
                            { id: 1, value: 'No' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 10
                    },
                    {
                        id: 'clbupkgk0000l356df6frfhjs',
                        type: 'CHOICE',
                        title: 'What stage of your dissertation or major project are you currently at?',
                        values: [
                            { id: 0, value: 'Planning' },
                            { id: 1, value: 'Currently doing' },
                            { id: 2, value: 'Completed' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Yes',
                            condition: 'EQUAL_TO',
                            questionId: 'clbupjlb4000k356dtilletp9'
                        },
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 11
                    },
                    {
                        id: 'clbuq03pr000m356d1y62eniv',
                        rows: [
                            {
                                id: 0,
                                value: 'I understand the required standards for the dissertation / major project'
                            },
                            {
                                id: 1,
                                value: 'I am happy with the support I received for planning my dissertation / major project (topic selection, project outline, literature search, etc)'
                            },
                            {
                                id: 2,
                                value: 'My supervisor has the skills and subject knowledge to adequately support my dissertation / major project'
                            },
                            {
                                id: 3,
                                value: 'My supervisor provides helpful feedback on my progress'
                            }
                        ],
                        type: 'GRID',
                        title: "To what extent do you agree or disagree with the following statements regarding your dissertation / major project? (If you have not had experience of an item then please select 'Not applicable or Too soon to say')",
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable or Too soon to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Yes',
                            condition: 'EQUAL_TO',
                            questionId: 'clbupjlb4000k356dtilletp9'
                        },
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 12
                    },
                    {
                        id: 'clbuq26ol000n356dzqmxttpm',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Yes',
                            condition: 'EQUAL_TO',
                            questionId: 'clbupjlb4000k356dtilletp9'
                        },
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 13,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                visibleIf: {
                    value: [
                        'dissertation',
                        'dissertation resources',
                        'dissertation skills',
                        'dissertation skills resources',
                        'dissertation support',
                        'dissertation support resources',
                        'dissertation support skills',
                        'dissertation support skills resources'
                    ],
                    condition: 'ONE_OF',
                    questionId: 'clbupgp6z000i356d0bka2428'
                },
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 4071609515,
                title: 'Organisation and Management',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuq49qf000o356d16c26x5k',
                        rows: [
                            { id: 0, value: 'The timetable fits well with my other commitments' },
                            {
                                id: 1,
                                value: 'Any changes in the course or teaching have been communicated effectively'
                            },
                            {
                                id: 2,
                                value: 'The course is well organised and is running smoothly'
                            },
                            {
                                id: 3,
                                value: 'I was given appropriate guidance and support when I started my course'
                            },
                            {
                                id: 4,
                                value: 'I am encouraged to be involved in decisions about how my course is run'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statements regarding the organisation and management of your course?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 14
                    },
                    {
                        id: 'clbuq6jba000p356d7wg7h842',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 15,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 8597386771,
                title: 'Resources',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuq8yvt000q356dyzjzu99k',
                        rows: [
                            {
                                id: 0,
                                value: 'There is appropriate access to physical library resources and facilities'
                            },
                            {
                                id: 1,
                                value: 'There is appropriate access to online library resources'
                            },
                            {
                                id: 2,
                                value: 'There is appropriate access to IT resources and facilities when I am on-campus'
                            },
                            {
                                id: 3,
                                value: 'I have been able to access subject specific resources (for example: equipment, facilities, software, materials) necessary for my studies when I am on-campus'
                            },
                            {
                                id: 4,
                                value: 'I have been able to access subject specific resources (for example: course materials, software, virtual learning environment) necessary for my studies when I am learning remotely'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statements regarding the learning resources at your institution?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 16
                    },
                    {
                        id: 'clbuqb4ep000r356d88fd4l4f',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 17,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                visibleIf: {
                    value: [
                        'dissertation resources',
                        'dissertation skills resources',
                        'dissertation support resources',
                        'dissertation support skills resources',
                        'support skills resources',
                        'support resources',
                        'skills resources'
                    ],
                    condition: 'ONE_OF',
                    questionId: 'clbupgp6z000i356d0bka2428'
                },
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 9316256659,
                title: 'Support',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuqbvia000s356dqj0okwqq',
                        rows: [
                            {
                                id: 0,
                                value: 'The support for academic skills meets my needs (for example, support for your writing, language, subject-specific skills)'
                            },
                            {
                                id: 1,
                                value: 'The support for using IT and accessing resources meets my needs (for example, support with accessing online journals and e-books, using digital learning tools/apps)'
                            },
                            {
                                id: 2,
                                value: 'The support for my health and wellbeing meets my needs (for example, personal tutor, student support and counselling services)'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statements about support at your institution?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 18
                    },
                    {
                        id: 'clbuqek6y000t356dne3ye5wi',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 19,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                visibleIf: {
                    value: [
                        'dissertation support',
                        'dissertation support resources',
                        'dissertation support skills',
                        'support resources',
                        'support skills',
                        'support skills resources',
                        'dissertation support skills resources',
                        'support'
                    ],
                    condition: 'ONE_OF',
                    questionId: 'clbupgp6z000i356d0bka2428'
                },
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 6089781493,
                title: 'Skills Development',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuqj7d9000u356dao2c1phm',
                        rows: [
                            {
                                id: 0,
                                value: 'As a result of the course I am more confident about independent learning'
                            },
                            {
                                id: 1,
                                value: 'My confidence to be innovative or creative has developed during my course'
                            },
                            { id: 2, value: 'My research skills have developed during my course' },
                            {
                                id: 3,
                                value: 'My ability to communicate information effectively to diverse audiences has developed during my course'
                            },
                            {
                                id: 4,
                                value: 'I have been encouraged to think about what skills I need to develop for my career'
                            },
                            {
                                id: 5,
                                value: 'As a result of the course I feel better prepared for my future career'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statements regarding the development of skills on your course?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 20
                    },
                    {
                        id: 'clbuqm2cs000v356d10awztue',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you have any further comments on these issues then please provide them here. Please be as specific as possible:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'comments', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 21,
                        prePopulationParam: 'comments',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                visibleIf: {
                    value: [
                        'dissertation skills',
                        'dissertation skills resources',
                        'dissertation support skills',
                        'skills',
                        'skills resources',
                        'support skills',
                        'support skills resources',
                        'dissertation support skills resources'
                    ],
                    condition: 'ONE_OF',
                    questionId: 'clbupgp6z000i356d0bka2428'
                },
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 4974213477,
                title: 'Overview',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuqpik0000w356dumeqyvqd',
                        rows: [
                            {
                                id: 0,
                                value: 'Overall, I am satisfied with the quality of the course'
                            }
                        ],
                        type: 'GRID',
                        title: 'To what extent do you agree or disagree with the following statement about your overall experience of your course?',
                        columns: [
                            { id: 0, value: 'Definitely agree' },
                            { id: 1, value: 'Mostly agree' },
                            { id: 2, value: 'Neither agree nor disagree' },
                            { id: 3, value: 'Mostly disagree' },
                            { id: 4, value: 'Definitely disagree' },
                            { id: 5, value: 'Not applicable' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 22
                    },
                    {
                        id: 'clbuqquci000x356dq2n5jtkh',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'Please comment on one thing that has been most enjoyable or interesting on your course:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 23
                    },
                    {
                        id: 'clbuqre27000y356dr2d8ascf',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'Please comment on one thing that would most improve your experience of your course:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 24
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 4972532521,
                title: 'Demographic questions',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbuqshg00011356doouy7t1q',
                        type: 'NOTE',
                        content:
                            '<p>To help us understand whether provision at this institution and across the sector is meeting the needs of all postgraduates, we would now like to ask some questions about you and your course. As with the rest of the survey, all reporting will be anonymous and your responses will be treated confidentially.</p>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbuqswwt0013356dvy5uf0dw',
                        type: 'NOTE',
                        content: '<h3>About yourself</h3>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbuqv77q0017356dt6qjgux3',
                        type: 'DROPDOWN',
                        title: 'What is your age?',
                        values: [
                            { id: 0, value: '25 years old or younger' },
                            { id: 1, value: '26-30 years old' },
                            { id: 2, value: '31-35 years old' },
                            { id: 3, value: '36-40 years old' },
                            { id: 4, value: '41-45 years old' },
                            { id: 5, value: '46-50 years old' },
                            { id: 6, value: '51-55 years old' },
                            { id: 7, value: '56 years old or older' },
                            { id: 8, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        fullWidth: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'age', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 25,
                        prePopulationParam: 'age',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clbuqvt7n0018356dbs92hzjj',
                        type: 'CHOICE',
                        title: 'What is your sex?',
                        values: [
                            { id: 0, value: 'Female' },
                            { id: 1, value: 'Male' },
                            { id: 2, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        prePopulation: { param: 'sex', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 26,
                        prePopulationParam: 'sex',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clbuqw98q0019356djmuen4ee',
                        type: 'CHOICE',
                        title: 'Are you trans or do you have a trans history?',
                        values: [
                            { id: 0, value: 'Yes' },
                            { id: 1, value: 'No' },
                            { id: 2, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        prePopulation: { param: 'trans', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 27,
                        prePopulationParam: 'trans',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clbuqxi24001a356d197qiinq',
                        type: 'CHOICE',
                        title: 'How would you describe your gender?',
                        values: [
                            { id: 0, value: 'Man' },
                            { id: 1, value: 'Woman' },
                            { id: 2, value: 'Non-binary' },
                            { id: 3, value: 'In another way (specify, if you wish)' },
                            { id: 4, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 28
                    },
                    {
                        id: 'clbuqy2cv001b356dj0hcyopo',
                        type: 'SINGLE_LINE',
                        title: 'If you selected In another way, specify, if you wish:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'In another way (specify, if you wish)',
                            condition: 'EQUAL_TO',
                            questionId: 'clbuqxi24001a356d197qiinq'
                        },
                        isRequired: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 29
                    },
                    {
                        id: 'clbuqz7hq001c356dky2mthba',
                        type: 'CHOICE',
                        title: 'Do you consider yourself to have a disability? (for example dyslexia, long-term illness, mental health condition, physical impairment)',
                        values: [
                            { id: 0, value: 'Yes' },
                            { id: 1, value: 'No' },
                            { id: 2, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 30
                    },
                    {
                        id: 'clbuqzlcz001d356d7ljsyh41',
                        type: 'CHOICE',
                        title: "If 'Yes', please choose one or more from the following options:",
                        values: [
                            {
                                id: 0,
                                value: 'Blind or have a visual impairment uncorrected by glasses'
                            },
                            { id: 1, value: 'D/deaf or have a hearing impairment' },
                            {
                                id: 2,
                                value: 'Development condition that you have had since childhood which affects motor, cognitive, social and emotional skills, and speech and language'
                            },
                            {
                                id: 3,
                                value: 'Learning difference such as dyslexia, dyspraxia or AD(H)D'
                            },
                            {
                                id: 4,
                                value: 'Long-term illness or health condition such as cancer, HIV, diabetes, chronic heart disease, or epilepsy'
                            },
                            {
                                id: 5,
                                value: 'Mental health condition, challenge or disorder, such as depression, schizophrenia or anxiety'
                            },
                            {
                                id: 6,
                                value: 'Physical impairment (a condition that substantially limits one or more basic physical activities such as walking, climbing stairs, lifting or carrying)'
                            },
                            {
                                id: 7,
                                value: 'Social/communication conditions such as a speech and language impairment or an autistic spectrum condition'
                            },
                            {
                                id: 8,
                                value: 'An impairment, health condition or learning difference not listed above'
                            },
                            { id: 9, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Yes',
                            condition: 'EQUAL_TO',
                            questionId: 'clbuqz7hq001c356dky2mthba'
                        },
                        isRequired: false,
                        multicheck: true,
                        preventChange: 'NO_RULE',
                        questionNumber: 31
                    },
                    {
                        id: 'clbur0x7s001f356dd0joaqkd',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'Please specify if you wish',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'An impairment, health condition or learning difference not listed above',
                            condition: 'EQUAL_TO',
                            questionId: 'clbuqzlcz001d356d7ljsyh41'
                        },
                        isRequired: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 32
                    },
                    {
                        id: 'clbur1vn2001h356dtygylri4',
                        type: 'DROPDOWN',
                        title: 'Where do you consider to be your permanent home?',
                        values: [
                            { id: 0, value: 'England' },
                            { id: 1, value: 'Northern Ireland' },
                            { id: 2, value: 'Scotland' },
                            { id: 3, value: 'Wales' },
                            { id: 4, value: 'Guernsey' },
                            { id: 5, value: 'Isle of Man' },
                            { id: 6, value: 'Jersey' },
                            { id: 7, value: 'Channel Islands not otherwise specified' },
                            { id: 8, value: '=-===' },
                            { id: 9, value: 'Afghanistan' },
                            { id: 10, value: 'Åland Islands' },
                            { id: 11, value: 'Albania' },
                            { id: 12, value: 'Algeria' },
                            { id: 13, value: 'American Samoa' },
                            { id: 14, value: 'Andorra' },
                            { id: 15, value: 'Angola' },
                            { id: 16, value: 'Anguilla' },
                            { id: 17, value: 'Antigua and Barbuda' },
                            { id: 18, value: 'Argentina' },
                            { id: 19, value: 'Armenia' },
                            { id: 20, value: 'Aruba' },
                            { id: 21, value: 'Australia' },
                            { id: 22, value: 'Austria' },
                            { id: 23, value: 'Azerbaijan' },
                            { id: 24, value: 'Bahamas, The' },
                            { id: 25, value: 'Bahrain' },
                            { id: 26, value: 'Bangladesh' },
                            { id: 27, value: 'Barbados' },
                            { id: 28, value: 'Belarus' },
                            { id: 29, value: 'Belgium' },
                            { id: 30, value: 'Belize' },
                            { id: 31, value: 'Benin' },
                            { id: 32, value: 'Bermuda' },
                            { id: 33, value: 'Bhutan' },
                            { id: 34, value: 'Bolivia [Bolivia, Plurinational State of]' },
                            { id: 35, value: 'Bonaire, Sint Eustatius and Saba' },
                            { id: 36, value: 'Bosnia and Herzegovina' },
                            { id: 37, value: 'Botswana' },
                            { id: 38, value: 'Brazil' },
                            { id: 39, value: 'British Virgin Islands [Virgin Islands, British]' },
                            { id: 40, value: 'Brunei [Brunei Darussalam]' },
                            { id: 41, value: 'Bulgaria' },
                            { id: 42, value: 'Burkina Faso' },
                            { id: 43, value: 'Burundi' },
                            { id: 44, value: 'Cambodia' },
                            { id: 45, value: 'Cameroon' },
                            { id: 46, value: 'Canada' },
                            { id: 47, value: 'Canary Islands' },
                            { id: 48, value: 'Cape Verde' },
                            { id: 49, value: 'Caribbean not otherwise specified' },
                            { id: 50, value: 'Cayman Islands' },
                            { id: 51, value: 'Central African Republic' },
                            { id: 52, value: 'Chad' },
                            { id: 53, value: 'Chile' },
                            { id: 54, value: 'China' },
                            { id: 55, value: 'Christmas Island' },
                            { id: 56, value: 'Cocos (Keeling) Islands' },
                            { id: 57, value: 'Colombia' },
                            { id: 58, value: 'Comoros' },
                            { id: 59, value: 'Congo' },
                            {
                                id: 60,
                                value: 'Congo (Democratic Republic) [Congo (The Democratic Republic of the)]'
                            },
                            { id: 61, value: 'Cook Islands' },
                            { id: 62, value: 'Costa Rica' },
                            { id: 63, value: 'Croatia' },
                            { id: 64, value: 'Cuba' },
                            { id: 65, value: 'Curaçao' },
                            { id: 66, value: 'Cyprus (European Union)' },
                            { id: 67, value: 'Cyprus (Non-European Union)' },
                            { id: 68, value: 'Czech Republic' },
                            { id: 69, value: 'Denmark' },
                            { id: 70, value: 'Djibouti' },
                            { id: 71, value: 'Dominica' },
                            { id: 72, value: 'Dominican Republic' },
                            { id: 73, value: 'East Timor [Timor Leste]' },
                            { id: 74, value: 'Ecuador' },
                            { id: 75, value: 'Egypt' },
                            { id: 76, value: 'El Salvador' },
                            { id: 77, value: 'Equatorial Guinea' },
                            { id: 78, value: 'Eritrea' },
                            { id: 79, value: 'Estonia' },
                            { id: 80, value: 'Eswatini' },
                            { id: 81, value: 'Ethiopia' },
                            { id: 82, value: 'Falkland Islands [Falkland Islands (Malvinas)]' },
                            { id: 83, value: 'Faroe Islands' },
                            { id: 84, value: 'Fiji' },
                            { id: 85, value: 'Finland' },
                            { id: 86, value: 'France' },
                            { id: 87, value: 'French Guiana' },
                            { id: 88, value: 'French Polynesia' },
                            { id: 89, value: 'Gabon' },
                            { id: 90, value: 'Gambia, The' },
                            { id: 91, value: 'Georgia' },
                            { id: 92, value: 'Germany' },
                            { id: 93, value: 'Ghana' },
                            { id: 94, value: 'Gibraltar' },
                            { id: 95, value: 'Greece' },
                            { id: 96, value: 'Greenland' },
                            { id: 97, value: 'Grenada' },
                            { id: 98, value: 'Guadeloupe' },
                            { id: 99, value: 'Guam' },
                            { id: 100, value: 'Guatemala' },
                            { id: 101, value: 'Guinea' },
                            { id: 102, value: 'Guinea-Bissau' },
                            { id: 103, value: 'Guyana' },
                            { id: 104, value: 'Haiti' },
                            { id: 105, value: 'Honduras' },
                            {
                                id: 106,
                                value: 'Hong Kong (Special Administrative Region of China) [Hong Kong]'
                            },
                            { id: 107, value: 'Hungary' },
                            { id: 108, value: 'Iceland' },
                            { id: 109, value: 'India' },
                            { id: 110, value: 'Indonesia' },
                            { id: 111, value: 'Iran [Iran, Islamic Republic of]' },
                            { id: 112, value: 'Iraq' },
                            { id: 113, value: 'Ireland' },
                            { id: 114, value: 'Israel' },
                            { id: 115, value: 'Italy' },
                            { id: 116, value: "Ivory Coast [Côte D'ivoire]" },
                            { id: 117, value: 'Jamaica' },
                            { id: 118, value: 'Japan' },
                            { id: 119, value: 'Jordan' },
                            { id: 120, value: 'Kazakhstan' },
                            { id: 121, value: 'Kenya' },
                            { id: 122, value: 'Kiribati' },
                            {
                                id: 123,
                                value: "Korea (North) [Korea, Democratic People's Republic of]"
                            },
                            { id: 124, value: 'Korea (South) [Korea, Republic of]' },
                            { id: 125, value: 'Kosovo' },
                            { id: 126, value: 'Kuwait' },
                            { id: 127, value: 'Kyrgyzstan' },
                            { id: 128, value: "Laos [Lao People's Democratic Republic]" },
                            { id: 129, value: 'Latvia' },
                            { id: 130, value: 'Lebanon' },
                            { id: 131, value: 'Lesotho' },
                            { id: 132, value: 'Liberia' },
                            { id: 133, value: 'Libya' },
                            { id: 134, value: 'Liechtenstein' },
                            { id: 135, value: 'Lithuania' },
                            { id: 136, value: 'Luxembourg' },
                            {
                                id: 137,
                                value: 'Macao (Special Administrative Region of China) [Macao]'
                            },
                            { id: 138, value: 'Madagascar' },
                            { id: 139, value: 'Malawi' },
                            { id: 140, value: 'Malaysia' },
                            { id: 141, value: 'Maldives' },
                            { id: 142, value: 'Mali' },
                            { id: 143, value: 'Malta' },
                            { id: 144, value: 'Marshall Islands' },
                            { id: 145, value: 'Martinique' },
                            { id: 146, value: 'Mauritania' },
                            { id: 147, value: 'Mauritius' },
                            { id: 148, value: 'Mayotte' },
                            { id: 149, value: 'Mexico' },
                            { id: 150, value: 'Micronesia [Micronesia, Federated States of]' },
                            { id: 151, value: 'Moldova [Moldova, Republic of]' },
                            { id: 152, value: 'Monaco' },
                            { id: 153, value: 'Mongolia' },
                            { id: 154, value: 'Montenegro' },
                            { id: 155, value: 'Montserrat' },
                            { id: 156, value: 'Morocco' },
                            { id: 157, value: 'Mozambique' },
                            {
                                id: 158,
                                value: 'Myanmar (Burma) [The Republic of the Union of Myanmar]'
                            },
                            { id: 159, value: 'Namibia' },
                            { id: 160, value: 'Nauru' },
                            { id: 161, value: 'Nepal' },
                            { id: 162, value: 'Netherlands' },
                            { id: 163, value: 'Netherlands Antilles' },
                            { id: 164, value: 'New Caledonia' },
                            { id: 165, value: 'New Zealand' },
                            { id: 166, value: 'Nicaragua' },
                            { id: 167, value: 'Niger' },
                            { id: 168, value: 'Nigeria' },
                            { id: 169, value: 'Niue' },
                            { id: 170, value: 'Norfolk Island' },
                            { id: 171, value: 'North Macedonia' },
                            { id: 172, value: 'Northern Mariana Islands' },
                            { id: 173, value: 'Norway' },
                            {
                                id: 174,
                                value: 'Occupied Palestinian Territories [Palestine, State of]'
                            },
                            { id: 175, value: 'Oman' },
                            { id: 176, value: 'Pakistan' },
                            { id: 177, value: 'Palau' },
                            { id: 178, value: 'Panama' },
                            { id: 179, value: 'Papua New Guinea' },
                            { id: 180, value: 'Paraguay' },
                            { id: 181, value: 'Peru' },
                            { id: 182, value: 'Philippines' },
                            {
                                id: 183,
                                value: 'Pitcairn, Henderson, Ducie and Oeno Islands [Pitcairn]'
                            },
                            { id: 184, value: 'Poland' },
                            { id: 185, value: 'Portugal' },
                            { id: 186, value: 'Puerto Rico' },
                            { id: 187, value: 'Qatar' },
                            { id: 188, value: 'Réunion' },
                            { id: 189, value: 'Romania' },
                            { id: 190, value: 'Russia [Russian Federation]' },
                            { id: 191, value: 'Rwanda' },
                            { id: 192, value: 'Samoa' },
                            { id: 193, value: 'San Marino' },
                            { id: 194, value: 'Sao Tome and Principe' },
                            { id: 195, value: 'Saudi Arabia' },
                            { id: 196, value: 'Senegal' },
                            { id: 197, value: 'Serbia' },
                            { id: 198, value: 'Seychelles' },
                            { id: 199, value: 'Sierra Leone' },
                            { id: 200, value: 'Singapore' },
                            { id: 201, value: 'Sint Maarten (Dutch part)' },
                            { id: 202, value: 'Slovakia' },
                            { id: 203, value: 'Slovenia' },
                            { id: 204, value: 'Solomon Islands' },
                            { id: 205, value: 'Somalia' },
                            { id: 206, value: 'South Africa' },
                            { id: 207, value: 'South Georgia and The South Sandwich Islands' },
                            { id: 208, value: 'South Sudan' },
                            { id: 209, value: 'Spain' },
                            { id: 210, value: 'Sri Lanka' },
                            { id: 211, value: 'St Barthélemy' },
                            { id: 212, value: 'St Helena, Ascension and Tristan da Cunha' },
                            { id: 213, value: 'St Kitts and Nevis' },
                            { id: 214, value: 'St Lucia' },
                            { id: 215, value: 'St Martin (French Part) [St Martin]' },
                            { id: 216, value: 'St Pierre and Miquelon' },
                            { id: 217, value: 'St Vincent and The Grenadines' },
                            { id: 218, value: 'Sudan' },
                            { id: 219, value: 'Suriname' },
                            { id: 220, value: 'Svalbard and Jan Mayen' },
                            { id: 221, value: 'Sweden' },
                            { id: 222, value: 'Switzerland' },
                            { id: 223, value: 'Syria [Syrian Arab Republic]' },
                            { id: 224, value: 'Taiwan [Taiwan, Province of China]' },
                            { id: 225, value: 'Tajikistan' },
                            { id: 226, value: 'Tanzania [Tanzania, United Republic of]' },
                            { id: 227, value: 'Thailand' },
                            { id: 228, value: 'Togo' },
                            { id: 229, value: 'Tokelau' },
                            { id: 230, value: 'Tonga' },
                            { id: 231, value: 'Trinidad and Tobago' },
                            { id: 232, value: 'Tunisia' },
                            { id: 233, value: 'Turkey' },
                            { id: 234, value: 'Turkmenistan' },
                            { id: 235, value: 'Turks and Caicos Islands' },
                            { id: 236, value: 'Tuvalu' },
                            { id: 237, value: 'Uganda' },
                            { id: 238, value: 'Ukraine' },
                            { id: 239, value: 'United Arab Emirates' },
                            { id: 240, value: 'United States' },
                            {
                                id: 241,
                                value: 'United States Virgin Islands [Virgin Islands, U. S.]'
                            },
                            { id: 242, value: 'Uruguay' },
                            { id: 243, value: 'Uzbekistan' },
                            { id: 244, value: 'Vanuatu' },
                            { id: 245, value: 'Vatican City [Holy See (Vatican City State)]' },
                            { id: 246, value: 'Venezuela [Venezuela, Bolivarian Republic of]' },
                            { id: 247, value: 'Vietnam [Viet Nam]' },
                            { id: 248, value: 'Wallis and Futuna' },
                            { id: 249, value: 'Western Sahara' },
                            { id: 250, value: 'Yemen' },
                            { id: 251, value: 'Zambia' },
                            { id: 252, value: 'Zimbabwe' }
                        ],
                        isLocked: true,
                        readonly: false,
                        fullWidth: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'domicile', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 33,
                        prePopulationParam: 'domicile',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clbur3hki001i356dy26dhb5r',
                        type: 'CHOICE',
                        title: 'Did you receive free school meals in year 11 at school?',
                        values: [
                            { id: 0, value: 'Yes' },
                            { id: 1, value: 'No' },
                            { id: 2, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: [
                                'England',
                                'Northern Ireland',
                                'Scotland',
                                'Wales',
                                'Guernsey',
                                'Isle of Man',
                                'Jersey',
                                'Channel Islands not otherwise specified'
                            ],
                            condition: 'ONE_OF',
                            questionId: 'clbur1vn2001h356dtygylri4'
                        },
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 34
                    },
                    {
                        id: 'clbur3y3b001j356d2fem1es5',
                        type: 'CHOICE',
                        title: 'Are you the first generation in your family to attend university (i.e. your parents or parental carers did not attend)?',
                        values: [
                            { id: 0, value: 'Yes' },
                            { id: 1, value: 'No' },
                            { id: 2, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 35
                    },
                    {
                        id: 'clbur4gqg001k356dk7lhgrr7',
                        type: 'DROPDOWN',
                        title: 'What is your ethnic group? (Please choose one option that best describes your ethnic group or background):',
                        values: [
                            { id: 0, value: 'Arab' },
                            { id: 1, value: 'Asian - Bangladeshi or Bangladeshi British' },
                            { id: 2, value: 'Asian - Chinese or Chinese British' },
                            { id: 3, value: 'Asian - Indian or Indian British' },
                            { id: 4, value: 'Asian - Pakistani or Pakistani British' },
                            { id: 5, value: 'Any other Asian background' },
                            { id: 6, value: 'Black - African or African British' },
                            { id: 7, value: 'Black - Caribbean or Caribbean British' },
                            { id: 8, value: 'Any other Black background' },
                            {
                                id: 9,
                                value: 'Mixed or multiple ethnic groups - White or White British and Asian or Asian British'
                            },
                            {
                                id: 10,
                                value: 'Mixed or multiple ethnic groups - White or White British and Black African or Black African British'
                            },
                            {
                                id: 11,
                                value: 'Mixed or multiple ethnic groups - White or White British and Black Caribbean or Black Caribbean British'
                            },
                            { id: 12, value: 'Any other Mixed or Multiple ethnic background' },
                            {
                                id: 13,
                                value: 'White - English, Scottish, Welsh, Northern Irish or British'
                            },
                            { id: 14, value: 'White - Gypsy or Irish Traveller' },
                            { id: 15, value: 'White - Irish' },
                            { id: 16, value: 'White - Roma' },
                            { id: 17, value: 'Any other White background' },
                            { id: 18, value: 'Any other ethnic background' },
                            { id: 19, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        fullWidth: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'ethnicity', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 36,
                        prePopulationParam: 'ethnicity',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 3843111188,
                title: 'About your course',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clbur5lt2001l356d35ph74te',
                        type: 'NOTE',
                        content:
                            '<p>For these questions, please respond in relation to the taught postgraduate course you are currently studying</p>',
                        isLocked: true,
                        readonly: true,
                        isEditing: false,
                        preventChange: 'NO_RULE'
                    },
                    {
                        id: 'clbur60a9001m356ddjxju6ti',
                        type: 'CHOICE',
                        title: 'I am registered (currently studying at this institution) for the qualification of:',
                        values: [
                            { id: 0, value: 'Taught Masters (for example MBA, LLM, MSc, MEng)' },
                            { id: 1, value: 'Postgraduate Certificate (including PGCE)' },
                            { id: 2, value: 'Postgraduate Diploma' },
                            { id: 3, value: 'Other (please specify)' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        prePopulation: { param: 'qualification', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 37,
                        prePopulationParam: 'qualification',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clbur6ka0001n356duudjek2k',
                        type: 'SINGLE_LINE',
                        title: 'If you selected Other, please specify:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Other (please specify)',
                            condition: 'EQUAL_TO',
                            questionId: 'clbur60a9001m356ddjxju6ti'
                        },
                        isRequired: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 38
                    },
                    {
                        id: 'clbura0lq001s356drm95cgon',
                        type: 'DROPDOWN',
                        title: 'Discipline - QUESTION HIDDEN - Please see guidance and pre-populate',
                        values: [
                            { id: 0, value: 'Medicine and Dentistry - Medical sciences' },
                            { id: 1, value: 'Medicine and Dentistry - Medicine' },
                            {
                                id: 2,
                                value: 'Medicine and Dentistry - Specialist medicine (for example anaesthasia, oncology, paediatrics)'
                            },
                            { id: 3, value: 'Medicine and Dentistry - Dentistry' },
                            { id: 4, value: 'Nursing and Midwifery - Nursing' },
                            { id: 5, value: 'Nursing and Midwifery - Adult nursing' },
                            { id: 6, value: 'Nursing and Midwifery - Community nursing' },
                            { id: 7, value: 'Nursing and Midwifery - Midwifery' },
                            { id: 8, value: "Nursing and Midwifery - Children's nursing" },
                            { id: 9, value: 'Nursing and Midwifery - Dental nursing' },
                            { id: 10, value: 'Nursing and Midwifery - Mental health nursing' },
                            {
                                id: 11,
                                value: 'Nursing and Midwifery - Learning disabilities nursing'
                            },
                            { id: 12, value: 'Nursing and Midwifery - Others in nursing' },
                            {
                                id: 13,
                                value: 'Pharmacology, Toxicology and Pharmacy - Pharmacology'
                            },
                            { id: 14, value: 'Pharmacology, Toxicology and Pharmacy - Toxicology' },
                            { id: 15, value: 'Pharmacology, Toxicology and Pharmacy - Pharmacy' },
                            { id: 16, value: 'Allied Health - Health sciences (general)' },
                            { id: 17, value: 'Allied Health - Nutrition and dietetics' },
                            { id: 18, value: 'Allied Health - Ophthalmics' },
                            { id: 19, value: 'Allied Health - Environmental and public health' },
                            { id: 20, value: 'Allied Health - Physiotherapy' },
                            {
                                id: 21,
                                value: 'Allied Health - Complementary and alternative medicine'
                            },
                            { id: 22, value: 'Medical Sciences - Medical technology' },
                            {
                                id: 23,
                                value: 'Allied Health - Counselling, psychotherapy and occupational therapy'
                            },
                            { id: 24, value: 'Medical Sciences - Healthcare science (general)' },
                            { id: 25, value: 'Medical Sciences - Biomedical sciences (general)' },
                            {
                                id: 26,
                                value: 'Medical Sciences - Anatomy, physiology and pathology'
                            },
                            { id: 27, value: 'Biosciences - Biosciences (general)' },
                            { id: 28, value: 'Biosciences - Biology (general)' },
                            { id: 29, value: 'Biosciences - Ecology and environmental biology' },
                            { id: 30, value: 'Biosciences - Microbiology and cell science' },
                            { id: 31, value: 'Biosciences - Plant sciences' },
                            { id: 32, value: 'Biosciences - Zoology' },
                            { id: 33, value: 'Biosciences - Genetics' },
                            {
                                id: 34,
                                value: 'Biosciences - Molecular biology, biophysics and biochemistry'
                            },
                            { id: 35, value: 'Biosciences - Hair and beauty sciences' },
                            { id: 36, value: 'Biosciences - Others in biosciences' },
                            {
                                id: 37,
                                value: 'Sport and Exercise Sciences - Sport and exercise sciences'
                            },
                            { id: 38, value: 'Psychology - Psychology (general)' },
                            { id: 39, value: 'Psychology - Applied psychology' },
                            { id: 40, value: 'Psychology - Developmental psychology' },
                            { id: 41, value: 'Psychology - Psychology and health' },
                            { id: 42, value: 'Psychology - Others in psychology' },
                            {
                                id: 43,
                                value: 'Veterinary Sciences - Veterinary medicine and dentistry'
                            },
                            {
                                id: 44,
                                value: 'Veterinary Sciences - Others in veterinary sciences'
                            },
                            {
                                id: 45,
                                value: 'Agriculture, Food and Related Studies - Animal science'
                            },
                            {
                                id: 46,
                                value: 'Agriculture, Food and Related Studies - Agricultural sciences'
                            },
                            {
                                id: 47,
                                value: 'Agriculture, Food and Related Studies - Agriculture'
                            },
                            {
                                id: 48,
                                value: 'Agriculture, Food and Related Studies - Rural estate management'
                            },
                            {
                                id: 49,
                                value: 'Agriculture, Food and Related Studies - Forestry and arboriculture'
                            },
                            {
                                id: 50,
                                value: 'Agriculture, Food and Related Studies - Food and beverage studies (general)'
                            },
                            {
                                id: 51,
                                value: 'Agriculture, Food and Related Studies - Food sciences'
                            },
                            {
                                id: 52,
                                value: 'Agriculture, Food and Related Studies - Food and beverage production'
                            },
                            { id: 53, value: 'Physics and Astronomy - Physics' },
                            { id: 54, value: 'Physics and Astronomy - Astronomy' },
                            { id: 55, value: 'Chemistry - Chemistry' },
                            {
                                id: 56,
                                value: 'General, Applied and Forensic Sciences - Physical sciences (general)'
                            },
                            {
                                id: 57,
                                value: 'General, Applied and Forensic Sciences - Forensic and archaeological sciences'
                            },
                            {
                                id: 58,
                                value: 'General, Applied and Forensic Sciences - Sciences (general)'
                            },
                            {
                                id: 59,
                                value: 'General, Applied and Forensic Sciences - Natural sciences (general)'
                            },
                            { id: 60, value: 'Mathematical Sciences - Mathematics' },
                            { id: 61, value: 'Mathematical Sciences - Operational research' },
                            { id: 62, value: 'Mathematical Sciences - Statistics' },
                            { id: 63, value: 'Engineering - Engineering (general)' },
                            { id: 64, value: 'Engineering - Mechanical engineering' },
                            {
                                id: 65,
                                value: 'Engineering - Production and manufacturing engineering'
                            },
                            {
                                id: 66,
                                value: 'Engineering - Aeronautical and aerospace engineering'
                            },
                            { id: 67, value: 'Engineering - Naval architecture' },
                            {
                                id: 68,
                                value: 'Engineering - Bioengineering, medical and biomedical engineering'
                            },
                            { id: 69, value: 'Engineering - Civil engineering' },
                            {
                                id: 70,
                                value: 'Engineering - Electrical and electronic engineering'
                            },
                            {
                                id: 71,
                                value: 'Engineering - Chemical, process and energy engineering'
                            },
                            { id: 72, value: 'Engineering - Others in engineering' },
                            { id: 73, value: 'Materials and Technology - Minerals technology' },
                            { id: 74, value: 'Materials and Technology - Materials technology' },
                            { id: 75, value: 'Materials and Technology - Polymers and textiles' },
                            { id: 76, value: 'Materials and Technology - Maritime technology' },
                            { id: 77, value: 'Materials and Technology - Biotechnology' },
                            { id: 78, value: 'Materials and Technology - Others in technology' },
                            { id: 79, value: 'Materials and Technology - Materials science' },
                            { id: 80, value: 'Computing - Computer science' },
                            { id: 81, value: 'Computing - Information technology' },
                            { id: 82, value: 'Computing - Information systems' },
                            { id: 83, value: 'Computing - Software engineering' },
                            { id: 84, value: 'Computing - Artificial intelligence' },
                            { id: 85, value: 'Computing - Computer games and animation' },
                            { id: 86, value: 'Computing - Business computing' },
                            { id: 87, value: 'Computing - Others in computing' },
                            {
                                id: 88,
                                value: 'Geography, Earth and Environmental Studies - Geography (general)'
                            },
                            {
                                id: 89,
                                value: 'Geography, Earth and Environmental Studies - Physical geographical sciences'
                            },
                            {
                                id: 90,
                                value: 'Geography, Earth and Environmental Studies - Human geography'
                            },
                            {
                                id: 91,
                                value: 'Geography, Earth and Environmental Studies - Environmental sciences'
                            },
                            {
                                id: 92,
                                value: 'Geography, Earth and Environmental Studies - Others in geographical studies'
                            },
                            {
                                id: 93,
                                value: 'Geography, Earth and Environmental Studies - Earth sciences'
                            },
                            { id: 94, value: 'Architecture, Building and Planning - Architecture' },
                            { id: 95, value: 'Architecture, Building and Planning - Building' },
                            {
                                id: 96,
                                value: 'Architecture, Building and Planning - Landscape design'
                            },
                            {
                                id: 97,
                                value: 'Architecture, Building and Planning - Planning (urban, rural and regional)'
                            },
                            {
                                id: 98,
                                value: 'Sociology, Social Policy and Anthropology - Social sciences (general)'
                            },
                            {
                                id: 99,
                                value: 'Sociology, Social Policy and Anthropology - Sociology'
                            },
                            {
                                id: 100,
                                value: 'Sociology, Social Policy and Anthropology - Social policy'
                            },
                            {
                                id: 101,
                                value: 'Sociology, Social Policy and Anthropology - Anthropology'
                            },
                            {
                                id: 102,
                                value: 'Sociology, Social Policy and Anthropology - Development studies'
                            },
                            {
                                id: 103,
                                value: 'Sociology, Social Policy and Anthropology - Cultural studies'
                            },
                            { id: 104, value: 'Economics - Economics' },
                            { id: 105, value: 'Politics - Politics' },
                            { id: 106, value: 'Health and Social Care - Social work' },
                            {
                                id: 107,
                                value: 'Health and Social Care - Childhood and youth studies'
                            },
                            { id: 108, value: 'Health and Social Care - Health studies' },
                            { id: 109, value: 'Law - Law' },
                            {
                                id: 110,
                                value: 'Business and Management - Business and management (general)'
                            },
                            { id: 111, value: 'Business and Management - Business studies' },
                            { id: 112, value: 'Business and Management - Marketing' },
                            { id: 113, value: 'Business and Management - Management studies' },
                            {
                                id: 114,
                                value: 'Business and Management - Human resource management'
                            },
                            {
                                id: 115,
                                value: 'Business and Management - Tourism, transport and travel'
                            },
                            { id: 116, value: 'Business and Management - Finance' },
                            { id: 117, value: 'Business and Management - Accounting' },
                            {
                                id: 118,
                                value: 'Business and Management - Others in business and management'
                            },
                            {
                                id: 119,
                                value: 'Media, Journalism and Communications - Information services'
                            },
                            {
                                id: 120,
                                value: 'Media, Journalism and Communications - Publicity studies'
                            },
                            { id: 121, value: 'Media, Journalism and Communications - Publishing' },
                            { id: 122, value: 'Media, Journalism and Communications - Journalism' },
                            {
                                id: 123,
                                value: 'Media, Journalism and Communications - Media studies'
                            },
                            { id: 124, value: 'English studies - English studies (general)' },
                            { id: 125, value: 'English studies - English language' },
                            { id: 126, value: 'English studies - Literature in English' },
                            { id: 127, value: 'English studies - Studies of specific authors' },
                            { id: 128, value: 'English studies - Creative writing' },
                            { id: 129, value: 'English studies - Others in English studies' },
                            { id: 130, value: 'English studies - Linguistics' },
                            { id: 131, value: 'Celtic studies - Celtic studies (general)' },
                            { id: 132, value: 'Celtic studies - Gaelic studies' },
                            { id: 133, value: 'Celtic studies - Welsh studies' },
                            { id: 134, value: 'Celtic studies - Others in Celtic studies' },
                            { id: 135, value: 'Languages and Area Studies - French studies' },
                            {
                                id: 136,
                                value: 'Languages and Area Studies - German and Scandinavian studies'
                            },
                            { id: 137, value: 'Languages and Area Studies - Italian studies' },
                            { id: 138, value: 'Languages and Area Studies - Iberian studies' },
                            { id: 139, value: 'Languages and Area Studies - Slavic studies' },
                            { id: 140, value: 'Languages and Area Studies - Asian studies' },
                            {
                                id: 141,
                                value: 'Languages and Area Studies - African and modern Middle Eastern studies'
                            },
                            {
                                id: 142,
                                value: 'Languages and Area Studies - American and Australasian studies'
                            },
                            {
                                id: 143,
                                value: 'Languages and Area Studies - Others in language and area studies'
                            },
                            { id: 144, value: 'History and Archaeology - History' },
                            {
                                id: 145,
                                value: 'History and Archaeology - History of art, architecture and design'
                            },
                            { id: 146, value: 'History and Archaeology - Archaeology' },
                            { id: 147, value: 'History and Archaeology - Heritage studies' },
                            { id: 148, value: 'History and Archaeology - Classics' },
                            { id: 149, value: 'Philosophy and Religious Studies - Philosophy' },
                            {
                                id: 150,
                                value: 'Philosophy and Religious Studies - Theology and religious studies'
                            },
                            {
                                id: 151,
                                value: 'Creative Arts and Design - Creative arts and design (general)'
                            },
                            { id: 152, value: 'Creative Arts and Design - Art' },
                            { id: 153, value: 'Creative Arts and Design - Design studies' },
                            { id: 154, value: 'Performing Arts - Performing arts (general)' },
                            { id: 155, value: 'Performing Arts - Music' },
                            { id: 156, value: 'Performing Arts - Drama' },
                            { id: 157, value: 'Performing Arts - dance' },
                            {
                                id: 158,
                                value: 'Creative Arts and Design - Cinematics and photography'
                            },
                            {
                                id: 159,
                                value: 'Creative Arts and Design - Others in creative arts and design'
                            },
                            { id: 160, value: 'Education and Teaching - Education' },
                            { id: 161, value: 'Education and Teaching - Teacher training' },
                            {
                                id: 162,
                                value: 'Combined and General Studies - Combined, general or negotiated studies'
                            },
                            {
                                id: 163,
                                value: 'Combined and General Studies - Personal development'
                            },
                            {
                                id: 164,
                                value: 'Combined and General Studies - Humanities (general)'
                            },
                            {
                                id: 165,
                                value: 'Combined and General Studies - Liberal arts (general)'
                            },
                            { id: 166, value: 'CAH2. medicine and dentistry' },
                            { id: 167, value: 'CAH2. pharmacology, toxicology and pharmacy' },
                            { id: 168, value: 'CAH2. nursing and midwifery' },
                            { id: 169, value: 'CAH2. medical sciences' },
                            { id: 170, value: 'CAH2. allied health' },
                            { id: 171, value: 'CAH2. biosciences' },
                            { id: 172, value: 'CAH2. sport and exercise sciences' },
                            { id: 173, value: 'CAH2. psychology' },
                            { id: 174, value: 'CAH2. veterinary sciences' },
                            { id: 175, value: 'CAH2. agriculture, food and related studies' },
                            { id: 176, value: 'CAH2. physics and astronomy' },
                            { id: 177, value: 'CAH2. chemistry' },
                            { id: 178, value: 'CAH2. general, applied and forensic sciences' },
                            { id: 179, value: 'CAH2. mathematical sciences' },
                            { id: 180, value: 'CAH2. engineering' },
                            { id: 181, value: 'CAH2. materials and technology' },
                            { id: 182, value: 'CAH2. computing' },
                            { id: 183, value: 'CAH2. architecture, building and planning' },
                            { id: 184, value: 'CAH2. sociology, social policy and anthropology' },
                            { id: 185, value: 'CAH2. economics' },
                            { id: 186, value: 'CAH2. politics' },
                            { id: 187, value: 'CAH2. health and social care' },
                            { id: 188, value: 'CAH2. law' },
                            { id: 189, value: 'CAH2. business and management' },
                            { id: 190, value: 'CAH2. English studies' },
                            { id: 191, value: 'CAH2. Celtic studies' },
                            { id: 192, value: 'CAH2. languages and area studies' },
                            { id: 193, value: 'CAH2. history and archaeology' },
                            { id: 194, value: 'CAH2. philosophy and religious studies' },
                            { id: 195, value: 'CAH2. education and teaching' },
                            { id: 196, value: 'CAH2. media, journalism and communications' },
                            { id: 197, value: 'CAH2. creative arts and design' },
                            { id: 198, value: 'CAH2. performing arts' },
                            { id: 199, value: 'CAH2. geography, earth and environmental studies' },
                            { id: 200, value: 'CAH2. combined and general studies' },
                            { id: 201, value: 'CAH1. medicine and dentistry' },
                            { id: 202, value: 'CAH1. subjects allied to medicine' },
                            { id: 203, value: 'CAH1. biological and sport sciences' },
                            { id: 204, value: 'CAH1. psychology' },
                            { id: 205, value: 'CAH1. veterinary sciences' },
                            { id: 206, value: 'CAH1. agriculture, food and related studies' },
                            { id: 207, value: 'CAH1. physical sciences' },
                            { id: 208, value: 'CAH1. general and others in sciences' },
                            { id: 209, value: 'CAH1. mathematical sciences' },
                            { id: 210, value: 'CAH1. engineering and technology' },
                            { id: 211, value: 'CAH1. computing' },
                            { id: 212, value: 'CAH1. geographical and environmental studies' },
                            { id: 213, value: 'CAH1. architecture, building and planning' },
                            { id: 214, value: 'CAH1. humanities and liberal arts (non-specific)' },
                            { id: 215, value: 'CAH1. social sciences' },
                            { id: 216, value: 'CAH1. law' },
                            { id: 217, value: 'CAH1. business and management' },
                            { id: 218, value: 'CAH1. communications and media' },
                            { id: 219, value: 'CAH1. language and area studies' },
                            {
                                id: 220,
                                value: 'CAH1. historical, philosophical and religious studies'
                            },
                            { id: 221, value: 'CAH1. creative arts and design' },
                            { id: 222, value: 'CAH1. education and teaching' },
                            { id: 223, value: 'CAH1. combined and general studies' },
                            { id: 224, value: 'CAH1. media, journalism and communications' },
                            { id: 225, value: 'CAH1. design, and creative and performing arts' },
                            { id: 226, value: 'CAH1. geography, earth and environmental studies' }
                        ],
                        isLocked: true,
                        readonly: false,
                        fullWidth: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'discipline', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 39,
                        prePopulationParam: 'discipline',
                        prePopulationVisibility: 'HIDE'
                    },
                    {
                        id: 'clburamyp001t356drqsoq4my',
                        type: 'CHOICE',
                        title: 'I am currently registered as studying',
                        values: [
                            { id: 0, value: 'Full-time' },
                            { id: 1, value: 'Part-time' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        prePopulation: { param: 'mode', visibility: 'HIDE_IF_POPULATED' },
                        preventChange: 'NO_RULE',
                        questionNumber: 40,
                        prePopulationParam: 'mode',
                        prePopulationVisibility: 'HIDE_IF_POPULATED'
                    },
                    {
                        id: 'clburb6lx001u356d0yu55wbo',
                        type: 'CHOICE',
                        title: 'How have you usually had contact with staff this term?',
                        values: [
                            { id: 0, value: 'Mostly or completely virtually / online' },
                            { id: 1, value: 'A mixture of in-person and virtually / online' },
                            { id: 2, value: 'Mostly or completely in-person' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 41
                    },
                    {
                        id: 'clburbl9m001v356d7ys8fjkn',
                        type: 'CHOICE',
                        title: 'Intended mode of teaching',
                        values: [
                            { id: 0, value: 'Intended primarily as on-campus / in-person learner' },
                            { id: 1, value: 'Intended as primarily a distance learner' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        prePopulation: { param: 'delivery', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 42,
                        prePopulationParam: 'delivery',
                        prePopulationVisibility: 'HIDE'
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            },
            {
                id: 4060296844,
                title: 'You and your course',
                isLocked: true,
                isEditing: false,
                questions: [
                    {
                        id: 'clburcguk001w356dqmlysjc2',
                        type: 'CHOICE',
                        title: 'Have you considered, for any reason, leaving your postgraduate course?',
                        values: [
                            { id: 0, value: 'Yes' },
                            { id: 1, value: 'No' },
                            { id: 2, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 43
                    },
                    {
                        id: 'clburd2p3001x356dd1tiuj71',
                        type: 'CHOICE',
                        title: 'What was the main (or most recent) reason that led you to consider leaving?',
                        values: [
                            { id: 0, value: 'Difficulty balancing study and other commitments' },
                            { id: 1, value: 'Financial difficulties' },
                            { id: 2, value: 'Family or personal problems' },
                            { id: 3, value: 'My physical health' },
                            { id: 4, value: 'My mental/emotional health' },
                            { id: 5, value: 'There is not enough support for personal issues' },
                            { id: 6, value: 'There is not enough interaction with teaching staff' },
                            { id: 7, value: 'There is too much work' },
                            { id: 8, value: 'There is not enough support for my learning' },
                            { id: 9, value: 'I have found this level of study difficult' },
                            { id: 10, value: 'I don’t feel connected with my fellow students' },
                            { id: 11, value: 'The content of the course is not what I expected' },
                            {
                                id: 12,
                                value: 'The way the course is delivered is not what I expected'
                            },
                            { id: 13, value: 'I might have chosen the wrong institution' },
                            {
                                id: 14,
                                value: 'The wider student experience is not what I was hoping for'
                            },
                            { id: 15, value: 'Other' },
                            { id: 16, value: 'Prefer not to say' }
                        ],
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Yes',
                            condition: 'EQUAL_TO',
                            questionId: 'clburcguk001w356dqmlysjc2'
                        },
                        isRequired: false,
                        multicheck: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 44
                    },
                    {
                        id: 'clburfzg30000356dgsbh6w0u',
                        type: 'MULTI_LINE',
                        lines: 5,
                        title: 'If you chose Other, please specify:',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        visibleIf: {
                            value: 'Other',
                            condition: 'EQUAL_TO',
                            questionId: 'clburd2p3001x356dd1tiuj71'
                        },
                        isRequired: false,
                        preventChange: 'NO_RULE',
                        questionNumber: 45
                    },
                    {
                        id: 'clcid5vbj0000356dc9bnw2w9',
                        type: 'SINGLE_LINE',
                        title: 'Course',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'course', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 46,
                        prePopulationParam: 'course',
                        prePopulationVisibility: 'HIDE'
                    },
                    {
                        id: 'clcid6eux0001356d5mu72oc0',
                        type: 'SINGLE_LINE',
                        title: 'Department',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'department', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 47,
                        prePopulationParam: 'department',
                        prePopulationVisibility: 'HIDE'
                    },
                    {
                        id: 'clcid74f40002356dz8ron6bs',
                        type: 'SINGLE_LINE',
                        title: 'Faculty',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'faculty', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 48,
                        prePopulationParam: 'faculty',
                        prePopulationVisibility: 'HIDE'
                    },
                    {
                        id: 'clcfx9qq70000356d67s44dj2',
                        type: 'SINGLE_LINE',
                        title: 'Username',
                        isLocked: true,
                        readonly: false,
                        isEditing: false,
                        isRequired: false,
                        prePopulation: { param: 'username', visibility: 'HIDE' },
                        preventChange: 'NO_RULE',
                        questionNumber: 49,
                        prePopulationParam: 'username',
                        prePopulationVisibility: 'HIDE'
                    }
                ],
                showTitle: true,
                description: '',
                showDescription: false,
                preventNewQuestions: false
            }
        ],
        theme: {
            main: 'bg-sky-700',
            name: 'Blue',
            text: 'text-sky-700',
            hover: 'hover:bg-sky-800',
            borderTop: 'border-t-sky-700'
        },
        title: 'PTES BASE BENCHMARKING - BASE',
        anonymous: false,
        finalPage: {
            content:
                '<p>Thank you very much for your time in completing this questionnaire. If you have a complaint or need support with any of the issues raised within the survey, please contact <strong><em>[the relevant service at your institution]</em></strong><em>.</em></p>',
            isLocked: false,
            isEditing: true
        },
        isEditing: false,
        description: '',
        showDescription: false,
        displayResponseID: true,
        displayProgressBar: true,
        displayQuestionNumbers: false,
        pageReorderingDisabled: true
    }
} as Survey;

function App() {
    const [survey, setSurvey] = useState<Survey>(s);

    const [notes, setNotes] = useState(true);

    const change = (e: FormEventHandler<HTMLDivElement>) => {
        // @ts-expect-error it is there
        const text = e.target.innerText;
        setSurvey(JSON.parse(text));
    };

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
                    <PDFDownloadLink
                        document={<MyDocument survey={survey} />}
                        fileName='my-file-name'
                    >
                        Download link here
                    </PDFDownloadLink>
                </p>
                <p style={{ display: 'block', width: '80%', margin: '0 auto 40px' }}>
                    What is downloaded from the above link is the <strong>same</strong> pdf that is
                    being rendered in the below viewer.
                </p>
                <hr style={{ display: 'block', width: '80%', margin: '0 auto 40px' }} />
                <div style={{ display: 'block', width: '80%', margin: '0 auto 40px' }}>
                    <p>
                        Toggling this checkbox toggles note questions on or off. This is a general
                        example of showing external settings causing a recalculation of the PDF
                    </p>
                    <div style={{ margin: '10px 0' }}>
                        <input
                            type='checkbox'
                            onChange={() => setNotes((s) => !s)}
                            style={{ marginRight: '10px' }}
                            defaultChecked={notes}
                        />
                        <label htmlFor='notes'>Innclude notes?</label>
                    </div>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '40% 60%',
                        gap: '20px',
                        width: 'calc(100% - 80px)',
                        margin: 'auto',
                        height: '800px'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            backgroundColor: '#333',
                            overflowX: 'scroll',
                            color: '#fefe'
                        }}
                        contentEditable
                        // @ts-expect-error stuff
                        onInput={change}
                    >
                        <pre>
                            <code>{JSON.stringify(survey, null, 10)}</code>
                        </pre>
                    </div>
                    <div style={{ width: '100%' }}>
                        <PDFViewer
                            showToolbar
                            style={{
                                width: '100%',
                                height: '800px'
                            }}
                        >
                            <MyDocument survey={survey} notes={notes} />
                        </PDFViewer>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
