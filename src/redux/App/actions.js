import {
  HIDE_DRAWER,
  SHOW_DRAWER,
} from './constants'

export function hideDrawer() {
  return {
    type: HIDE_DRAWER,
  }
}

export function showDrawer() {
  return {
    type: SHOW_DRAWER,
  }
}
