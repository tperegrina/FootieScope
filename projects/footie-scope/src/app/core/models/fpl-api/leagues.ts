export interface PagedResponse {
    has_next: boolean,
    page: number,
}
export interface LeagueClassic {
    league: League,
    new_entries: NewEntries,
    standings: Standings
}

export interface League {
    id: number
    name: string,
    created: Date,
    closed: boolean,
    max_entries: number,
    league_type: string, //might need an Enum for League Types
    scoring: string,
    admin_entry: number,
    start_event: number,
    code_privacy: string, //might need an Enum for Privacy types
    rank: number
}

export interface NewEntries extends PagedResponse {
    results: EntryResult[]
}

export interface EntryResult {
    entry: number
    entry_name: string
    joined_time: Date
    player_first_name: string,
    player_last_name: string
}

export interface Standings extends PagedResponse {
    results: StandingResult[]
}

export interface StandingResult {
    id: number,
    event_total: number,
    player_name: string,
    rank: number,
    last_rank: number,
    rank_sort: number,
    total: number,
    entry: number,
    entry_name: string,
}
