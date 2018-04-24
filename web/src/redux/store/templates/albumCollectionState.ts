export const albumCollection: AlbumCollectionStateTypes[] = [
    {"wrapperType":"collection",
        "collectionType":"Album",
        "artistId":301490824,
        "collectionId":578643761,
        "amgArtistId":2900484,
        "artistName":"Savant",
        "collectionName":"Alchemist",
        "collectionCensoredName":"Alchemist",
        "artistViewUrl":"https://itunes.apple.com/us/artist/savant/301490824?uo=4",
        "collectionViewUrl":"https://itunes.apple.com/us/album/alchemist/578643761?uo=4",
        "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/60x60bb.jpg",
        "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "collectionExplicitness":"notExplicit",
        "trackCount":22,
        "copyright":"℗ 2012 SectionZ Records",
        "country":"USA",
        "currency":"USD",
        "releaseDate":"2012-12-12T08:00:00Z",
        "primaryGenreName":"Dance"
    },
    {
        "wrapperType":"collection",
        "collectionType":"Album",
        "artistId":301490824,
        "collectionId":501943616,
        "amgArtistId":2900484,
        "artistName":"Savant",
        "collectionName":"Vario",
        "collectionCensoredName":"Vario",
        "artistViewUrl":"https://itunes.apple.com/us/artist/savant/301490824?uo=4",
        "collectionViewUrl":"https://itunes.apple.com/us/album/vario/501943616?uo=4",
        "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b0/00/ba/b000ba0f-5792-b5db-8157-ea8fd2469460/source/60x60bb.jpg",
        "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b0/00/ba/b000ba0f-5792-b5db-8157-ea8fd2469460/source/100x100bb.jpg",
        "collectionPrice":9.99,
        "collectionExplicitness":"notExplicit",
        "trackCount":16,
        "copyright":"℗ 2012 Aleksander Vinter",
        "country":"USA",
        "currency":"USD",
        "releaseDate":"2012-03-21T07:00:00Z",
        "primaryGenreName":"Dance"
    }
]

export interface AlbumCollectionStateTypes {
    wrapperType: string;
    collectionType: string;
    artistId: number;
    collectionId: number;
    amgArtistId: number;
    artistName: string;
    collectionName: string;
    collectionCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    collectionExplicitness: string;
    trackCount: number;
    copyright: string;
    country: string;
    currency: string;
    releaseDate: string;
    primaryGenreName: string;

}