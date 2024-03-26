export default function Form() {
  return (
    <div className='container mx-auto py-8'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='flex justify-between'>
          <div className='text-xl font-bold'>Patient Information</div>
          <div>
            <button
              type='button'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Patient List
            </button>
          </div>
        </div>
        <form className='mt-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='first_name'
              >
                First Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='first_name'
                type='text'
                placeholder='First Name'
              />
            </div>

            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='last_name'
              >
                Last Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='last_name'
                type='text'
                placeholder='Last Name'
              />
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Email'
              />
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='mobile_number'
              >
                Mobile Number
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='mobile_number'
                type='tel'
                placeholder='Mobile Number'
              />
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='age'
              >
                Age
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='age'
                type='number'
                placeholder='Age'
              />
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='gender'
              >
                Gender
              </label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='gender'
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='marital_status'
              >
                Marital Status
              </label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='marital_status'
              >
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='blood_group'
              >
                Blood Group
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='blood_group'
                type='text'
                placeholder='Blood Group'
              />
            </div>
            <div>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='date_of_birth'
              >
                Date of Birth
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='date_of_birth'
                type='date'
              />
            </div>
            <div className='col-span-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='address'
              >
                Address
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='address'
                placeholder='Address'
              />
            </div>
            <div className='col-span-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='image'
              >
                Upload Image
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='image'
                type='file'
              />
            </div>
            <div className='col-span-2'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='suggestion'
              >
                Suggestions
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='suggestion'
                placeholder='Suggestions'
              />
            </div>
          </div>
          <div className='mt-4 flex justify-end'>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
