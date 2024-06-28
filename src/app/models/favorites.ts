import { EventModel } from "./events";

export interface FavoriteModel {
    id:              number;
    currentusername: string;
    currentuserid:   string;
    eventid:         number;
    event:           EventModel;
}

export interface Event {
    id:          number;
    eventname:   string;
    description: string;
    eventDate:   Date;
    eventTime:   string;
    type:        string;
    username:    string;
    userid:      string;
    timestamp:   Date;
}