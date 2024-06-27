export interface FavoriteModel {
    id:              number;
    currentusername: string;
    currentuserid:   number;
    eventid:         number;
    event:           Event;
}

export interface Event {
    id:          number;
    eventname:   string;
    description: string;
    eventDate:   Date;
    eventTime:   string;
    type:        string;
    username:    string;
    userid:      number;
    timestamp:   Date;
}