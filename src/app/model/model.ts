export interface WordWebObject {
    id: number;
    order: number;
    references: number;
    internalComment: string;
}

export interface Human extends WordWebObject {
    internalID: string;
    firstName: string;
    lastName: string;
    gender: string;
    humanAsLexia: Lexia | number;
}

export interface Author extends Human {
    description: string;
    birthStartDate: string;
    birthEndDate: string;
    deathStartDate: string;
    deathEndDate: string;
    flStartDate: string;
    flEndDate: string;
}

export interface Contributor extends Human {
    email: string;
}

export interface Book extends WordWebObject {
    internalID: string;
    title: string;
    createdStartDate: string;
    createdEndDate: string;
    publishedStartDate: string;
    publishedEndDate: string;
    licenseStartDate: string;
    licenseEndDate: string;
    firstPerformanceStartDate: string;
    firstPerformanceEndDate: string;
    edition: string;
    editionHist: string;
    authors: Author[] | number[];
    venues: Venue[] | number[];
    organisations: Organisation[] | number[];
    subjects: Subject[] | number[];
    language: Language | number;
    bookAsLexia: Lexia | number;
}

export interface Passage extends WordWebObject {
    text: string;
    textHist: string;
    page: string;
    pageHist: string;
    book: Book | number;
    lexias: Lexia[] | number[];
    mentionedIn: Passage[] | number[];
    wasContributedBy: Contributor | number;
}

export interface Venue extends WordWebObject {
    internalID: string;
    name: string;
    place: string;
    venueAsLexia: Lexia | number;
}

export interface Organisation extends WordWebObject {
    internalID: string;
    name: string;
    organisationAsLexia: Lexia | number;
}

export interface Lexia extends WordWebObject {
    internalID: string;
    name: string;
}

export interface Language extends WordWebObject {
    name: string;
}

export interface Subject extends WordWebObject {
    name: string;
}

export interface Gender extends WordWebObject {
    name: string;
}

export interface ResearchField extends WordWebObject {
    name: string;
}

export interface Status extends WordWebObject {
    name: string;
}

export interface Genre extends WordWebObject {
    name: string;
    nodes: Genre[];
}

export interface Image extends WordWebObject {
    name: string;
    nodes: Image[];
}

export interface Marking extends WordWebObject {
    name: string;
    nodes: Marking[];
}

export interface FormalClass extends WordWebObject {
    name: string;
    nodes: FormalClass[];
}

export interface FunctionVoice extends WordWebObject {
    name: string;
    nodes: FunctionVoice[];
}

export interface TreeGenre extends Genre {
    isVisible: boolean;
    isExpanded: boolean;
}
