import {load, type Element} from 'cheerio'

const $ = await fetch(
  'https://www.amu.ac.in/miscellaneous/jawaharlal-nehru-medical-college-hospital/opd-schedule'
)
  .then((r) => r.text())
  .then(load)

const schedule: Record<string, string>[] = []

$('table tr').each((_, row) => {
  const obj: Record<string, string> = {}

  $(row)
    .find('td')
    .each((i: number, col: Element) => {
      obj[$(`tbody strong:eq(${i})`).text()] = $(col).text()
    })
  schedule.push(obj)
})

// @ts-expect-error Only to be used in Deno runtime
await Deno.writeTextFile('schedule.json', JSON.stringify(schedule))

console.log(schedule)
