import React from 'react'
import { Reducer as ReduxReducer, combineReducers } from 'redux'
import { connect as ReduxConnect } from 'react-redux'
import { InitState } from '../store'

export type Action<P> = {
  type: string
  payload?: P
}

export type Reducer<S = any> = ReduxReducer<S, Action<S>>

export const createReducers = <T extends { [key: string]: Reducer<any> }>(
  reducers: T,
) => combineReducers(reducers)

export const act = (type: string, payload?: any) => ({ type, payload })

export const createActions = <
  T extends {
    [name: string]: (...args: any[]) => Action<any>
  }
>(
  actions: T,
) => actions

export const connect = (Component: React.ComponentType<any>) =>
  ReduxConnect((s: InitState) => s)(Component)
