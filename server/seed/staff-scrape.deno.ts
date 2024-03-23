import cheerio from 'https://esm.sh/cheerio'

const $ = await fetch('https://www.amu.ac.in/miscellaneous/jawaharlal-nehru-medical-college-hospital/staff-members').then(r=>r.text()).then(cheerio.load)

const data = []

$('.contact-info').each((i,el)=>{
  const avatar = $(el).find('img').attr('src')
  const name = $(el).find('.default-heading:first').find('h3').text()
  const role = $(el).find('.default-heading:first').find('span').text()
  const username = $(el).find('ul:first a').attr('href').split('/').at(-1)
  
  const email = $(el).find('ul:last li:eq(2) span').text()
  const phone = $(el).find('ul:last li:first span').text()
  
  data.push({
    avatar,
    name,
    role,
    username,
    email,
    phone
  })
})

await Deno.writeTextFile('staff.json', JSON.stringify(data))

console.log(data)
