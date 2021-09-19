import http from '../utils/axios'
import {Page, Pageable, pageParams} from '../utils/page'
import {Hero} from '../model/Hero'

const heroesUrl = '/api/heroes'

/** GET heroes from the server */
export async function getHeroes(pageable: Pageable): Promise<Page<Hero>> {
  return (await http.get<Page<Hero>>(heroesUrl, {params: pageParams(null, pageable)})).data
}

/** GET hero by id. Will 404 if id not found */
export async function getHero(id: number): Promise<Hero> {
  return (await http.get<Hero>(`${heroesUrl}/${id}`)).data
}

/* GET heroes whose name contains search term */
export async function searchHeroes(term: string): Promise<Hero[]> {
  return (await http.get<Hero[]>(`${heroesUrl}/?name=${term}`)).data
}

/** POST: add a new hero to the server */
export async function addHero(hero: Hero): Promise<Hero> {
  return (await http.post<Hero>(heroesUrl, hero)).data
}

/** PUT: update the hero on the server */
export async function updateHero(hero: Hero): Promise<Hero> {
  return (await http.put<Hero>(heroesUrl, hero)).data
}

/** DELETE: delete the hero from the server */
export async function deleteHero(hero: Hero | number): Promise<void> {
  const id = typeof hero === 'number' ? hero : hero.id
  await http.delete(`${heroesUrl}/${id}`)
}
