import { createStore, createEvent } from 'effector'
import { SearchResultsType } from '../types/SearchResultsType'

// Events
export const setTotalPages = createEvent<number>()
export const setSearchResults = createEvent<SearchResultsType>()
export const setNextCursor = createEvent<string | null>()

// Stores

export const $totalPages = createStore<number>(0)
    .on(setTotalPages, (_, total) => total)

export const $searchResults = createStore<SearchResultsType>({} as SearchResultsType)
    .on(setSearchResults, (_, searchResults) => searchResults)

export const $nextCursor = createStore<string | null>(null)
    .on(setNextCursor, (_, $cursor) => $cursor)