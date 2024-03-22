import cheerio from 'https://esm.sh/cheerio'

const $ = await fetch('https://www.amu.ac.in/miscellaneous/jawaharlal-nehru-medical-college-hospital/opd-schedule')
				.then(r=>r.text())
				.then(cheerio.load)

const schedule = []

$('table tr').each((n,row)=>{
	const obj = {}
	
	$(row).find('td').each((i, col) => {
		obj[$(`tbody strong:eq(${i})`).text()] =$(col).text() 
	})
	schedule.push(obj)

})

await Deno.writeTextFile('schedule.json', JSON.stringify(schedule))

console.log(schedule)
