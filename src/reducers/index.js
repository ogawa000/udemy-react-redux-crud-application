import {reducer as form} from 'redux-form'
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events, form })