/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Settings() {
  return (
    <form className='mt-5 ml-5 space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
        <div>
          <div>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Profile
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className='mt-6 space-y-6 sm:mt-5 sm:space-y-5'>
            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Username
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <div className='flex max-w-lg rounded-md shadow-sm'>
                  <span className='inline-flex items-center px-3 text-gray-500 bg-gray-50 rounded-l-md border border-r-0 border-gray-300 sm:text-sm'>
                    workcation.com/
                  </span>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    autoComplete='username'
                    className='block flex-1 w-full min-w-0 rounded-none rounded-r-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='about'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                About
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full max-w-lg rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  defaultValue={''}
                />
                <p className='mt-2 text-sm text-gray-500'>
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='photo'
                className='block text-sm font-medium text-gray-700'
              >
                Photo
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <div className='flex items-center'>
                  <span className='overflow-hidden w-12 h-12 bg-gray-100 rounded-full'>
                    <svg
                      className='w-full h-full text-gray-300'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <title>Drop photo</title>
                      <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                  </span>
                  <button
                    type='button'
                    className='px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Cover photo
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <div className='flex justify-center px-6 pt-5 pb-6 max-w-lg rounded-md border-2 border-gray-300 border-dashed'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto w-12 h-12 text-gray-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                      >
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-8 space-y-6 sm:pt-10 sm:space-y-5'>
          <div>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Personal Information
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className='space-y-6 sm:space-y-5'>
            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                First name
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Last name
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Email address
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='country'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Country
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <select
                  id='country'
                  name='country'
                  autoComplete='country-name'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm'
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='street-address'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Street address
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='street-address'
                  id='street-address'
                  autoComplete='street-address'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                City
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  autoComplete='address-level2'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='region'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                State / Province
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='region'
                  id='region'
                  autoComplete='address-level1'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='postal-code'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                ZIP / Postal code
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='postal-code'
                  id='postal-code'
                  autoComplete='postal-code'
                  className='block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='pt-8 space-y-6 divide-y divide-gray-200 sm:pt-10 sm:space-y-5'>
          <div>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Notifications
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>
          <div className='space-y-6 divide-y divide-gray-200 sm:space-y-5'>
            <div className='pt-6 sm:pt-5'>
              <div role='group' aria-labelledby='label-email'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline'>
                  <div>
                    <div
                      className='text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700'
                      id='label-email'
                    >
                      By Email
                    </div>
                  </div>
                  <div className='mt-4 sm:mt-0 sm:col-span-2'>
                    <div className='space-y-4 max-w-lg'>
                      <div className='flex relative items-start'>
                        <div className='flex items-center h-5'>
                          <input
                            id='comments'
                            name='comments'
                            type='checkbox'
                            className='w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500'
                          />
                        </div>
                        <div className='ml-3 text-sm'>
                          <label
                            htmlFor='comments'
                            className='font-medium text-gray-700'
                          >
                            Comments
                          </label>
                          <p className='text-gray-500'>
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className='flex relative items-start'>
                          <div className='flex items-center h-5'>
                            <input
                              id='candidates'
                              name='candidates'
                              type='checkbox'
                              className='w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500'
                            />
                          </div>
                          <div className='ml-3 text-sm'>
                            <label
                              htmlFor='candidates'
                              className='font-medium text-gray-700'
                            >
                              Candidates
                            </label>
                            <p className='text-gray-500'>
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='flex relative items-start'>
                          <div className='flex items-center h-5'>
                            <input
                              id='offers'
                              name='offers'
                              type='checkbox'
                              className='w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500'
                            />
                          </div>
                          <div className='ml-3 text-sm'>
                            <label
                              htmlFor='offers'
                              className='font-medium text-gray-700'
                            >
                              Offers
                            </label>
                            <p className='text-gray-500'>
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-6 sm:pt-5'>
              <div role='group' aria-labelledby='label-notifications'>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline'>
                  <div>
                    <div
                      className='text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700'
                      id='label-notifications'
                    >
                      Push Notifications
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='max-w-lg'>
                      <p className='text-sm text-gray-500'>
                        These are delivered via SMS to your mobile phone.
                      </p>
                      <div className='mt-4 space-y-4'>
                        <div className='flex items-center'>
                          <input
                            id='push-everything'
                            name='push-notifications'
                            type='radio'
                            className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='push-everything'
                            className='block ml-3 text-sm font-medium text-gray-700'
                          >
                            Everything
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='push-email'
                            name='push-notifications'
                            type='radio'
                            className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='push-email'
                            className='block ml-3 text-sm font-medium text-gray-700'
                          >
                            Same as email
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            id='push-nothing'
                            name='push-notifications'
                            type='radio'
                            className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500'
                          />
                          <label
                            htmlFor='push-nothing'
                            className='block ml-3 text-sm font-medium text-gray-700'
                          >
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end'>
          <button
            type='button'
            className='px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 rounded-md border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}
