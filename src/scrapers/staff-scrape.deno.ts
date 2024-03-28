import { load, type Element } from 'cheerio'
const $ = await fetch(
  'https://www.amu.ac.in/miscellaneous/jawaharlal-nehru-medical-college-hospital/staff-members'
)
  .then((r) => r.text())
  .then(load)

const data: Record<string, string | undefined>[] = []

$('.contact-info').each((_, el: Element) => {
  const avatar = $(el).find('img').attr('src')
  const name = $(el).find('.default-heading:first').find('h3').text()
  const role = $(el).find('.default-heading:first').find('span').text()
  const username = $(el).find('ul:first a').attr('href')?.split('/').at(-1)

  const email = $(el).find('ul:last li:eq(2) span').text()
  const phone = $(el).find('ul:last li:first span').text()

  data.push({
    avatar,
    name,
    role,
    username,
    email,
    phone,
  })
})

// @ts-expect-error Only to be used in Deno runtime
await Deno.writeTextFile('staff.json', JSON.stringify(data))

console.log(data)
