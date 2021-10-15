import { ArtistModel } from "./artist.model";

export interface TrackModel{
    name : string,
    album : string,
    cover : string,
    artist? : ArtistModel,
    url : string,
    _id : string | number,
    duration?: any
}