import React from 'react'
import { creatorData, profileData } from '../../../utils/data'
import { Link, useLocation } from 'react-router-dom'

const ProfileLink = () => {
  const location = useLocation();
  return (
    <div className='pt-[64px] flex w-full gap-[32px]'>
      {location.pathname == '/profile/me' ? (
        <>
        {profileData.map((item, idx) => (
        <Link key={idx} to={item.url}>
          <span className={`capitalize relative ${item.url == (location.pathname + location.search) ? "font-semibold text-text" : ""}`}>{item.label}
            {(location.pathname + location.search) == item.url && (
              <div className='absolute w-full h-[3px] bg-primary rounded-full'></div>
            )}
          </span>
        </Link>
      ))}
        </>
      ) : (
        <>
        {creatorData.map((item, idx) => (
        <Link key={idx} to={item.url}>
          <span className={`capitalize relative ${item.url == (location.pathname + location.search) ? "font-semibold text-text" : ""}`}>{item.label}
            {(location.pathname + location.search) == item.url && (
              <div className='absolute w-full h-[3px] bg-primary rounded-full'></div>
            )}
          </span>
        </Link>
      ))}
        </>
      )}
    </div>
  )
}

export default ProfileLink