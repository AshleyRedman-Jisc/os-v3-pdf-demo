import { z } from 'zod';

export const screeningSchema = z
    .object({
        values: z.array(z.number().min(1))
    })
    .strict();

export type Screening = z.infer<typeof screeningSchema>;

export type BaseQuestionValidation = {
    enabled: boolean;
    min: number;
    max: number;
};

export type SingleLineQuestionValidation = {
    inputType: InputType;
    enabled: boolean;
    min?: number;
    max?: number;
};

export type DateTimeQuestionValidation = {
    enabled: boolean;
    min?: string;
    max?: string;
};

export type MultiLineQuestionValidation = BaseQuestionValidation;

export type ChoiceQuestionValidation = BaseQuestionValidation;

export type GridQuestionValidation = {
    columns?: BaseQuestionValidation | null;
    rows?: BaseQuestionValidation | null;
};

export type RowsColumns = 'rows' | 'columns';

export type InputType = 'text' | 'email' | 'number-integer' | 'number-decimal' | 'tel' | 'postcode';

export type IconType =
    | 'CHOICE_SINGLE'
    | 'CHOICE_MULTI'
    | 'GRID_SINGLE'
    | 'GRID_MULTI'
    | 'DROPDOWN'
    | 'SINGLE_LINE'
    | 'MULTI_LINE'
    | 'DATE_TIME'
    | 'DATE'
    | 'TIME'
    | 'NOTE';

export type SurveyStatus = 1 | 2 | 3 | 4;

export type ThemePrimaryColours =
    | 'Dark red'
    | 'Red'
    | 'Pink'
    | 'Purple'
    | 'Dark purple'
    | 'Dark blue'
    | 'Blue'
    | 'Dark green'
    | 'Green';

export type MinMax = 'min' | 'max';

export type SurveyDistributionData = {
    launched?: boolean;
    maxResponses?: number;
    closeOnMaxResponses?: boolean;
    expectedResponses?: number;
    dateTo?: Date;
    closeOnDateTo?: boolean;
};

export type AccessMethod = 'none' | 'password' | 'sac';

export type CreateSurvey = {
    name: string;
    account: string;
    survey: SurveyJson;
    v2SurveyId?: string;
};

export type PrePopulationVisibility = 'SHOW' | 'HIDE' | 'HIDE_IF_POPULATED';

export type SurveyEmailTemplateType = 'SURVEY_INVITATION';

// const surveyPage = z.object({
//     id: z.number(),
//     title: z.string(),
//     description: z.string(),
//     questions: z.string(),
//     showTitle: z.boolean(),
//     showDescription: z.boolean(),
//     preventNewQuestions: z.boolean(),
//     isLocked: z.boolean(),
//     isEditing: z.boolean()
// });

// export type SurveyPage = z.infer<typeof surveyPage>;

const surveyLogo = z
    .object({
        url: z.string(),
        alt: z.string(),
        size: z.union([
            z.literal('100px'),
            z.literal('200px'),
            z.literal('500px'),
            z.literal('800px'),
            z.literal('100%')
        ]),
        position: z.union([z.literal('0 0 0 auto'), z.literal('0 auto'), z.literal('0 auto 0 0')])
    })
    .strict();

export type SurveyLogo = z.infer<typeof surveyLogo>;

export type ImageUploadBody = {
    image: string;
};

const SurveyTranslationFinishLaterSchema = z.object({
    title: z.string().min(1).max(255), // Finish Later
    description: z.string().min(1).max(255) // Copy the below link and it keep it safe. You'll need it to return and complete the survey
});

const SurveyTranslationQuestionValidationSchema = z.object({
    multiline: z.object({
        wordcount: z.string().min(1).max(255), // Minimum $1 words/Maximum $2 words
        wordcountError: z.string().min(1).max(255) // Your answer has to have at least $1 words and at most $2 words
    }),
    grid: z.object({
        rowError: z.string().min(1).max(255), // You must select between $1 and $2 options per row
        columnError: z.string().min(1).max(255) // You must select between $1 and $2 options per column
    }),
    singleline: z.object({
        lengthError: z.string().min(1).max(255), // Your answer has to have a min length of $1 and a max length of $2
        integerError: z.string().min(1).max(255), // Your answer has to be an integer number between $1 and $2
        decimalError: z.string().min(1).max(255), // Your answer has to be a decimal number between $1 and $2
        emailError: z.string().min(1).max(255), // Your answer has to be a valid email address
        telephoneError: z.string().min(1).max(255), // Your answer has to be a valid UK telephone number
        postcodeError: z.string().min(1).max(255) // Your answer has to be a valid UK postcode
    }),
    date: z.object({
        beforeError: z.string().min(1).max(255), // Your answer must be on or before $1
        afterError: z.string().min(1).max(255) // Your answer must be on or after $1
    }),
    dateTime: z.object({
        beforeError: z.string().min(1).max(255), // Your answer must be before $1
        afterError: z.string().min(1).max(255) // Your answer must be after $1
    }),
    time: z.object({
        beforeError: z.string().min(1).max(255), // Your answer must be on or before $1
        afterError: z.string().min(1).max(255) // Your answer must be on or after $1
    }),
    choice: z.object({
        minMaxError: z.string().min(1).max(255) // You must select between $1 and $2 options
    })
});

const SurveyLanguageTranslationsSchema = z.object({
    next: z.string().min(1).max(255), // Next
    previous: z.string().min(1).max(255), // Previous
    submit: z.string().min(1).max(255), // Submit
    selectOption: z.string().min(1).max(255), // Please select an option
    surveyComplete: z.string().min(1).max(255), // Survey complete
    responseID: z.string().min(1).max(255), // Response ID
    page: z.string().min(1).max(255), // Page
    of: z.string().min(1).max(255), // of
    download: z.string().min(1).max(255), // Download
    copyright: z.string().min(1).max(255), // Copyright
    poweredBy: z.string().min(1).max(255), // Powered by
    reportAbuse: z.string().min(1).max(255), // Report abuse
    requiredQuestions: z.string().min(1).max(255), // The following question(s) require an answer
    requiredQuestionError: z.string().min(1).max(255), // This question requires an answer
    surveyContactDetails: z.string().min(1).max(255), // Survey contact details
    done: z.string().min(1).max(255), // Done
    surveyClosedMessage: z.string().min(1).max(255), // This survey has closed
    surveyNotOpenMessage: z.string().min(1).max(255), // This survey is not yet open. You will be able to complete the survey when it opens at $1 on $2
    finishLater: SurveyTranslationFinishLaterSchema,
    questionValidation: SurveyTranslationQuestionValidationSchema
});

export type SurveyLanguageTranslations = z.infer<typeof SurveyLanguageTranslationsSchema>;

export enum QuestionType {
    CHOICE = 'CHOICE',
    DROPDOWN = 'DROPDOWN',
    GRID = 'GRID',
    SINGLE_LINE = 'SINGLE_LINE',
    MULTI_LINE = 'MULTI_LINE',
    DATE_TIME = 'DATE_TIME',
    DATE = 'DATE',
    TIME = 'TIME',
    NOTE = 'NOTE'
}

export interface ThemeColour {
    name: ThemePrimaryColours;
    main: string;
    hover: string;
    text: string;
    borderTop: string;
}

export const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] as const;

export type Elements = (typeof elements)[number];

export interface Descriptors {
    title: string;
    titleElement?: Elements;
    showTitle?: boolean;
    description?: string;
    showDescription?: boolean;
}
export interface SurveyJson extends Descriptors {
    descriptionElement?: Elements;
    welcomeText?: string;
    displayProgressBar?: boolean;
    displayQuestionNumbers: boolean;
    displayResponseID?: boolean;
    displayResponseDownload?: boolean;
    randomQuestionOrder?: boolean;
    pages: Page[];
    finalPage: FinalPage;
    isEditing: boolean;
    logo?: {
        url: string;
        alt: string;
        size: '100px' | '200px' | '500px' | '800px' | '100%';
        position: '0 0 0 auto' | '0 auto' | '0 auto 0 0';
    };
    theme: ThemeColour;
    pageReorderingDisabled?: boolean;
    anonymous?: boolean;
}

export interface FinalPage {
    content: string;
    isEditing: boolean;
    isLocked?: boolean;
}

export interface Page extends Descriptors {
    id: number;
    questions: Array<BuilderItems>;
    isEditing: boolean;
    isLocked: boolean;
    preventNewQuestions: boolean;
    visibleIf?: VisibleIf | VisibleIfMany;
}

export type PossibleQuestions =
    | SingleLineQuestion
    | ChoiceQuestion
    | MultiLineQuestion
    | GridQuestion
    | SelectQuestion
    | DateTimeQuestion
    | DateQuestion;

export interface CoreQuestionDescriptors {
    id: string;
    readonly: boolean;
    questionNumber?: number;
    title?: string;
    showTitle?: boolean;
    description?: string;
    showDescription?: boolean;
    isRequired?: boolean;
    helperText?: string;
    showHelperText?: boolean;
    visibleIf?: VisibleIf | VisibleIfMany;
    isEditing?: boolean;
    isLocked?: boolean;
    preventChange?: PreventQuestionOptions;
}

export type PreventQuestionOptions = 'NO_RULE' | 'NO_EDIT' | 'NO_DELETE';

export interface ChoiceValues {
    id: number;
    value: string;
}

export type QuestionPrePopulationConfig = {
    prePopulation?: {
        visibility: PrePopulationVisibility;
        param: 'none' | string;
    };
};

export interface SingleLineQuestion extends CoreQuestionDescriptors, QuestionPrePopulationConfig {
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    fullWidth?: boolean;
    type: QuestionType.SINGLE_LINE;
    prePopulationParam?: 'none' | string;
    prePopulationVisibility?: PrePopulationVisibility;
    validation?: SingleLineQuestionValidation | null; // Optional for now for backwards compabibility
}

export interface DateTimeQuestion extends CoreQuestionDescriptors {
    value?: string;
    type: QuestionType.DATE_TIME;
    validation?: DateTimeQuestionValidation | null;
}

export interface DateQuestion extends CoreQuestionDescriptors {
    value?: string;
    type: QuestionType.DATE;
    validation?: DateTimeQuestionValidation | null;
}

export interface TimeQuestion extends CoreQuestionDescriptors {
    value?: string;
    type: QuestionType.TIME;
    validation?: DateTimeQuestionValidation | null;
}

export interface MultiLineQuestion extends CoreQuestionDescriptors, QuestionPrePopulationConfig {
    lines: number;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    type: QuestionType.MULTI_LINE;
    prePopulationParam?: 'none' | string;
    prePopulationVisibility?: PrePopulationVisibility;
    validation?: MultiLineQuestionValidation | null; // Optional for now for backwards compabibility
}

export interface ChoiceQuestion extends CoreQuestionDescriptors, QuestionPrePopulationConfig {
    multicheck: boolean;
    values: ChoiceValues[];
    defaultValues?: number[];
    inline?: boolean;
    type: QuestionType.CHOICE;
    prePopulationParam?: 'none' | string;
    prePopulationVisibility?: PrePopulationVisibility;
    validation?: ChoiceQuestionValidation | null; // Optional for now for backwards compatibility
    randomiseOptionsOrder?: boolean; // Optional for backwards compabibility
    screening?: Screening | null; // Optional for backwards compabibility
}

export interface GridQuestion extends CoreQuestionDescriptors {
    multicheck: boolean;
    columns: ChoiceValues[];
    rows: ChoiceValues[];
    type: QuestionType.GRID;
    validation?: GridQuestionValidation | null; // Optional for now for backwards compatibility
}

export interface SelectQuestion extends CoreQuestionDescriptors, QuestionPrePopulationConfig {
    placeholderOptionText?: string;
    values: ChoiceValues[];
    defaultValue?: string;
    fullWidth: boolean;
    type: QuestionType.DROPDOWN;
    prePopulationParam?: 'none' | string;
    prePopulationVisibility?: PrePopulationVisibility;
    randomiseOptionsOrder?: boolean; // Optional for backwards compabibility
    screening?: Screening | null; // Optional for backwards compabibility
}

export interface NoteQuestion extends CoreQuestionDescriptors {
    content: string;
    type: QuestionType.NOTE;
}

export type LogicOption = 'EQUAL_TO' | 'NOT_EQUAL_TO' | 'ONE_OF' | 'NOT_ONE_OF';

export interface VisibleIf {
    questionId: string;
    condition: 'EQUAL_TO' | 'NOT_EQUAL_TO';
    value: string | number;
}

export interface VisibleIfMany {
    questionId: string;
    condition: 'ONE_OF' | 'NOT_ONE_OF';
    value: number[];
}

export interface SurveyBuilderState {
    survey: SurveyJson;
    currentPage: number;
    enableLocking: boolean;
    enableSuperUserPageOptions: boolean;
    enableSuperUserQuestionOptions: boolean;
}

export interface SurveyBuilderProps {
    config: {
        enabledQuestions: QuestionType[];
        enableLocking: boolean;
        enableSuperUserPageOptions: boolean;
        enableSuperUserQuestionOptions: boolean;
        onUpdate: (survey: SurveyJson) => void;
        initialSurvey: SurveyJson;
        enablePrePopulation?: boolean;
        prePopulationParams?: string[];
    };
    isSuperUser?: boolean;
}

export interface SurveySettingsProps extends SurveyBuilderProps {
    survey: Survey;
}

export interface SurveyRendererProps {
    surveyObject: SurveyJson;
    isPreview: boolean;
    onSubmit: (response: string) => void;
    prePopulationParams?: Record<string, string | number> | null;
}

export type SurveySingleResponse =
    | string
    | number
    | number[]
    | Record<string, number | number[]>
    | undefined;

export interface SurveyResponse {
    [key: string]: SurveySingleResponse;
}

export interface QuestionEditorProps {
    question:
        | SingleLineQuestion
        | ChoiceQuestion
        | MultiLineQuestion
        | GridQuestion
        | SelectQuestion
        | DateTimeQuestion
        | DateQuestion
        | TimeQuestion;
}

export interface QuestionEditorComponentProps<T> {
    question: T;
    placeholder?: string;
}

export type BuilderItems =
    | SingleLineQuestion
    | ChoiceQuestion
    | MultiLineQuestion
    | GridQuestion
    | SelectQuestion
    | NoteQuestion
    | DateTimeQuestion
    | DateQuestion
    | TimeQuestion;

export interface InvalidQuestion {
    id: string;
    title: string;
}

export interface InvalidQuestionsAlertProps {
    invalidQuestions: InvalidQuestion[];
}

export enum SurveyStatuses {
    Draft = 1,
    Scheduled = 2,
    Closed = 3,
    Open = 4
}

export interface Survey {
    id: string;
    name: string;
    shortName: string;
    survey: SurveyJson;
    surveyLanguageId: string;
    translations: SurveyLanguageTranslations;
    createdAt: string;
    updatedAt: string;
    dateFrom: string;
    dateTo: string;
    launched: boolean;
    maxResponses: number;
    expectedResponses: number;
    closeOnMaxResponses: boolean;
    closeOnDateTo: boolean;
    createdByEmail: string;
    accountId: string;
    accountName: string;
    accountShortName: string;
    totalResponses: number;
    status: SurveyStatuses;
    usePassword: boolean;
    useSurveyAccessControl: boolean;
    password: string | null;
    params: string[];
    loginMessage: string | null;
    prePopulationParamValues?: Record<string, string | number>;
    finishLater: boolean | null;
    label?: string | null;
    surveyOwner?: string | undefined;
    screeningMessage: string | null;
}
