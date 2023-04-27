import React from 'react'

const Card = (
    {
        name,
        image,
        abbreviation,
        per,
        fourmonthper
    }
) => {
    return (
        <>
            <div className='group relative'>
                <div className={`min-h-50 aspect-h-1 w-full overflow-hidden bg-gray-100 rounded-lg border ${fourmonthper === '1' ? 'border-blue-500' : 'border-green-500'}`}>
                    <img src={image} alt={name} className='w-full h-full object-center object-cover group-hover:opacity-75' />
                </div>
                <div className='mt-4 flex justify-between gap-2'>
                    <div>
                        <h3 className='text-sm text-gray-700'>
                            <a href='https://campusonline.unir.net'>
                                <span aria-hidden='true' className='absolute inset-0' />
                                {name}
                            </a>
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>{abbreviation}</p>
                    </div>
                    <p className='text-sm font-medium text-gray-900'>{per}</p>
                </div>
            </div>
        </>
    )
}

export default Card