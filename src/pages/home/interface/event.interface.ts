export interface EventInterface {
    /*id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;*/
    event_id:   string;
    title:      string;
    descrption: string;
    created_at: Date;
    updated_at: Date;
    user:       {};
}

/*export interface Location {
    name: string;
    url:  string;
}*/
