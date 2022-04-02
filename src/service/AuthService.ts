import {Credentials} from '../model/Credentials'
import http from '../utils/axios'
import {UserDetails} from '../model/UserDetails'

const authUrl = '/api/auth'

async function login(user: Credentials): Promise<void> {
  const response = await http.post<{ token: string }>(authUrl, user)
  const token = response.data.token

  localStorage.setItem('currentUser', JSON.stringify({
    username: user.username,
    token: token,
    tokenParsed: decodeToken(token)
  }))
}

function getCurrentUser(): UserDetails {
  const userStr = localStorage.getItem('currentUser')
  return userStr ? JSON.parse(userStr) : null
}

function getToken(): string | null {
  const currentUser = getCurrentUser()
  return currentUser ? currentUser.token : null
}

function logout(): void {
  localStorage.removeItem('currentUser')
}

function isAuthenticated(): boolean {
  const currentUser = getCurrentUser()
  if (!currentUser) {
    return false
  }
  const exp = JSON.parse(currentUser.tokenParsed).exp * 1000
  const currentTime = (new Date()).getTime()
  return exp > currentTime
}

function hasRole(role: string): boolean {
  const currentUser = getCurrentUser()
  if (!currentUser) {
    return false
  }
  const authorities: string[] = getAuthorities(currentUser.tokenParsed)
  return authorities.indexOf('ROLE_' + role) !== -1
}

function decodeToken(token: string): string {
  const payload: string = token.split('.')[1]
  return window.atob(payload)
}

function getAuthorities(tokenParsed: string): string[] {
  return JSON.parse(tokenParsed).authorities
}

export {login, logout, getToken, hasRole, isAuthenticated}