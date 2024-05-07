import Pocketbase from 'pocketbase'
const pb = new Pocketbase(import.meta.env.DEV ? import.meta.env.VITE_PB_URL: undefined)

export default pb
