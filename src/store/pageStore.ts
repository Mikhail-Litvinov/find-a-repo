import { createStore, createEvent } from 'effector'
import { RepositoryPageType } from '../types/RepsitoryPageType'

// Events
export const setItemPage = createEvent<RepositoryPageType>()

// Stores

export const $itemPage = createStore<RepositoryPageType>({} as RepositoryPageType)
    .on(setItemPage, (_, total) => total)