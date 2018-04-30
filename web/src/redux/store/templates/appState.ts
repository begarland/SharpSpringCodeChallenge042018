export const appState: AppStateTypes = {
    artistNameToSearch: 'Savant',
    lastSuccessfulArtistNameSearched: 'Savant',
    artistIdToSearch: 301490824,
    showInvisibleFullScreen: false,


}

export interface AppStateTypes {
    artistNameToSearch: string;
    lastSuccessfulArtistNameSearched: string;
    artistIdToSearch: number;
    showInvisibleFullScreen: boolean;
}