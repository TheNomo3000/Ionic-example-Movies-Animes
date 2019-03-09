export interface IAnimes{
    id: string;
    title : {
        romaji : string;
        english : string;
        native: string;
    }
    genres: [];
    endDate: {
        year: number;
        month: number;
        day: number;
    };
    popularity: string;
    converImage: {
        extraLarge: string;
        large: string;
        medium: string;
        color: string
    }
}