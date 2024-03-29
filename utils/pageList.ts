export type Page = {
    url: string,
    title: string
}
export const pages: Array<Page> = [
    {url: '/', title: 'home'},
    {url: '/movies', title: 'movies'},
    {url: '/events', title: 'events'}
]


export const userInLinks = [
    {url: '/sign-up', title: 'sign up'},
    {url: '/sign-in', title: 'sign in'},
]