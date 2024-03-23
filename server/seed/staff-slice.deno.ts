import staff from './staff.json'	with {type: 'json'}	

const SLICE_START = 0
const SLICE_END = 18

const slice = (
  json: Array<Record<string, string>>,
  slice_start: number = SLICE_START,
  slice_end: number = SLICE_END
) => {
  if (!Array.isArray(json)) throw TypeError('Expected a JSON Array of Objects')
  return json.slice(slice_start, slice_end)
}

const slicedStaff = slice(staff)

// @ts-ignore
Deno.writeTextFile(
  `staff-${SLICE_END - SLICE_START}.json`,
  JSON.stringify(slicedStaff)
)