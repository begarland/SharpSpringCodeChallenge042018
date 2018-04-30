export const artistSearch: ArtistSearchTypes = {
    artists: [],
    notFound: null,
    spinner: false,
}

export interface ArtistSearchTypes {
    artists: ArtistTypes[]
    notFound: null | boolean;
    spinner: boolean;
}

export interface ArtistTypes {
    wrapperType: string;
    artistType: string;
    artistName: string;
    artistLinkUrl: string;
    artistId: number;
    amgArtistId: number;
    primaryGenreName: string;
    primaryGenreId: number;

}