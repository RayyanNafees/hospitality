/* This example requires Tailwind CSS v2.0+ */
import useSWR from 'swr'

const fetcher = async (url: string) =>
  await fetch(import.meta.env.VITE_PB_URL + url)
    .then((r) => r.json())
    .then((data) => data.items)

export default function FAQ() {
  const { isLoading, error, data } = useSWR(
    '/api/collections/site_faq/records',
    fetcher
  )

  return (
    <section aria-labelledby='faq-heading' className='bg-white'>
      <div className='max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='max-w-xl'>
          <h2
            id='faq-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            Frequently asked questions
          </h2>
          <p className='mt-4 text-base text-gray-500'>
            Questions. Frequently asked ones. Plus our answers. That's how FAQs
            work. If you can't find what you're looking for, you can always{' '}
            <a
              href='/'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              send us an email
            </a>{' '}
            with your enquiry.
          </p>
        </div>

        {error ? null : isLoading ? (
          <div>Loading...</div>
        ) : (
          <dl className='mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3'>
            {data.map((faq: { Q: string; A: string }) => (
              <div key={faq.Q}>
                <dt className='text-base font-medium text-gray-900'>{faq.Q}</dt>
                <dd className='mt-3 text-sm text-gray-500'>{faq.A}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
