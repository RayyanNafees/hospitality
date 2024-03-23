import { z } from 'zod'
import data from '../../assets/data/staff.json'
// import useSWR from 'swr'
/* This example requires Tailwind CSS v2.0+ */

const peopleSchema = z
  .object({
    avatar: z.string(),
    name: z.string(),
    role: z.string(),
    username: z.string(),
  })
  .array()

type People = z.infer<typeof peopleSchema>

const people: People = peopleSchema.parse(data)

const staffSiteUrl =
  'https://www.amu.ac.in/miscellaneous/jawaharlal-nehru-medical-college-hospital/staff-members'

export default function Team() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-8 sm:space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              The People
            </h2>
            <p className='text-xl text-gray-500'>
              Risus velit condimentum vitae tincidunt tincidunt. Mauris
              ridiculus fusce amet urna nunc. Ut nisl ornare diam in.
            </p>
          </div>

          <ul className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
            {people.slice(0,10).map((person : People[number]) => (
              <li key={person.username}>
                <a
                  className='space-y-4 block'
                  href={`${staffSiteUrl}/${person.username}`}
                >
                  <img
                    className='mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24'
                    src={person.avatar}
                    alt=''
                    loading='lazy'
                  />
                  <div className='space-y-2'>
                    <div className='text-xs font-medium lg:text-sm'>
                      <h3>{person.name}</h3>
                      <p className='text-indigo-600'>{person.role}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
